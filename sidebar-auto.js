const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function traverseFolder(folderPath) {
  const sidebar = {};

  function traverseDirectory(directory, parentPath) {

    const files = fs.readdirSync(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        const directoryPath = path.join(directory, file);
        const subFolderPath = parentPath ? path.join(parentPath, file) : `/${file}`;
        traverseDirectory(directoryPath, subFolderPath);
      } else if (stats.isFile() && path.extname(file) === '.md') {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);
        const fileName = data.title || path.basename(file, '.md');
        const pathName = path.basename(file, '.md');
        const fileLink = path.join(parentPath, pathName).replace(/\\/g, '/');
        const fileObject = { text: fileName, link: `/pages${fileLink}` };

        const key = `/pages${parentPath}/`.replace(/\\/g, '/')

        if (sidebar[key]) {
          sidebar[key][0].items.push(fileObject);
        } else {
          sidebar[key] = [{ text: parentPath.replace(/\\/g, '/'), items: [fileObject] }];
        }
      }
    }
  }

  traverseDirectory(folderPath, '');

  return sidebar;
}

// 示例用法
const folderPath = './docs/pages'; // 替换为实际的文件夹路径
const sidebar = traverseFolder(folderPath);

// 输出生成的JSON对象
// console.log(JSON.stringify(sidebar, null, 2));
const prepend = `export const sidebar = `
fs.writeFileSync("docs\\.vitepress\\sidebar.js", prepend + JSON.stringify(sidebar, null, 2))
