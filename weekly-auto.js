const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
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
              title: data.title.slice(8),
              date: data.date.toLocaleDateString(),
              link: filePath.replace(/\\/g, '/').slice(4,-3),
              img:data.img
            })
    }
  });
}

// 调用函数并传入要遍历的文件夹路径
const directoryPath = './docs/pages/weekly';
traverseDirectory(directoryPath);

const prepend = `export const weekly = `
fs.writeFileSync("docs\\.vitepress\\weekly.js", prepend + JSON.stringify(weeklys.reverse(), null, 2))


// export const result = prepend + JSON.stringify(rewrites, null, 2)