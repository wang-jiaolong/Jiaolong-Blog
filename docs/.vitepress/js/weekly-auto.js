import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


function traverseFolder(directoryPath) {
  const weeklys = [];

  function traverseDirectory(directoryPath) {
    // 读取目录下的所有文件和文件夹
    const files = fs.readdirSync(directoryPath);

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        // 如果是文件夹，则递归遍历子文件夹
        traverseDirectory(filePath);
      } else if (path.extname(filePath) === '.md') {
        // 如果是以.md结尾的文件，则执行你想要的操作
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);
        // weeklys[filePath.replace(/\\/g, '/').slice(5)] = "pages" + data.permalink + ".md" 
        weeklys.push({
          title: data.title,
          date: data.date.toLocaleDateString(),
          link: filePath.replace(/\\/g, '/').slice(4, -3),
          img: data.img
        })
      }
    });
  }

  // 调用函数并传入要遍历的文件夹路径
  traverseDirectory(directoryPath);
  return weeklys
}

const directoryPath = './docs/pages/weekly';

const weeklys = traverseFolder(directoryPath).reverse()

// 创建一个空数组，用于存放结果
const data = [];

// 遍历JSON数组并按年份分类
weeklys.forEach(item => {
  const year = new Date(item.date).getFullYear();
  
  // 查找是否已经存在相同年份的数据
  const existingYearData = data.find(d => d.title === year);

  if (existingYearData) {
    existingYearData.items.push(item);
  } else {
    // 如果不存在相同年份的数据，创建一个新的对象
    data.push({
      title: year,
      items: [item]
    });
  }
});

export const weekly = data

console.log(data)