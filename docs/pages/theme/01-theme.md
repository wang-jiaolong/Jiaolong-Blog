---
title: Theme
layout: doc
permalink: /theme/theme
---

# About this theme

>  本站基于[VitePress](https://vitepress.dev/)默认主题修改



## 组件

### LinkCard

为本站[Wiki](/wiki)页面设计

1. 新建`LinkCard.vue`

   ::: details LinkCard.vue

   ```vue
   <template>
       <div class="linkList">
           <div v-for="item in items" class="linkCard">
               <a :href="item.link" class="box">
                   <img class="img" :src="item.icon" />
                   <div class="info">
                       <div class="title">
                           {{ item.title }}
                       </div>
                       <div class="desc">
                           {{ item.desc }}
                       </div>
                   </div>
               </a>
           </div>
       </div>
   </template>
   
   
   <script setup>
   
   const props = defineProps({
       items: Object
   })
   
   </script>
   
   
   <style scoped lang="less">
   .linkList {
       display: flex;
       flex-wrap: wrap;
   
   
       a {
           text-decoration: inherit;
           outline: none;
           color: inherit;
       }
   
       .linkCard {
           margin: 8px;
           width: calc(100% / 3 - 16px);
           display: block;
           border: 1px solid var(--vp-c-bg-soft);
           border-radius: 12px;
           height: 100%;
           background-color: var(--vp-c-bg-soft);
           transition: border-color 0.25s, background-color 0.25s;
   
           @media (max-width: 860px) {
               width: calc(100% / 2 - 16px);
           }
   
           &:hover {
               border-color: var(--vp-c-brand);
               background-color: var(--vp-c-bg-soft-up);
           }
   
           .box {
               display: flex;
               // flex-direction: column;
               padding: 15px;
               height: 100%;
               align-items: center;
   
               @media (max-width: 419px) {
                   padding: 10px;
   
               }
   
               .img {
                   display: block;
                   float: left;
                   width: 50px;
                   height: 50px;
                   margin-right: 15px;
   
                   @media (max-width: 419px) {
                       width: 35px;
                       height: 35px;
                   }
               }
   
               .info {
                   .title {
                       font-size: 16px;
                       font-weight: 600;
   
                       @media (max-width: 419px) {
                           font-size: 14px;
   
                       }
                   }
   
   
   
   
                   .desc {
                       font-size: 14px;
                       font-weight: 500;
                       color: var(--vp-c-text-2);
   
                       @media (max-width: 419px) {
                           width: 40px;
                           height: 40px;
                           display: none;
                       }
                   }
               }
           }
       }
   }
   </style>
   ```

   

   :::

2. 使用

   ```vue
   <script setup>
   const items = [
     {
     title:"Swift",link:"/pages/wiki/swift",icon:"/wiki/swiftui.png",desc:"SwiftUI"
     }
   ]
   </script>
   
   <LinkCard  :items ="items" />
   
   ```

3. 效果

![image-20230615214932064](https://s2.loli.net/2023/06/15/myr4EZMvtqV8X7I.png)



### QuoteCard

为本站[Excerpt](/excerpt)页面设计

1. 新建`QuoteCard.vue`

   ::: details QuoteCard.vue

   ```vue
   <template>
       <div class="container">
           <div class="header">
           <button @click="folder" class="left">
               <div class="title">{{ title }}</div>
               <iconRight class="iconRight" :class="{ rotated: isShow }" theme="outline" size="30" fill="#333" />
           </button>
           <div class="caption">共<span class="number"> {{ items.length }} </span>条</div>
   
       </div>
   
       <div v-show="isShow" class="quoteList">
           <div v-for="item in items.reverse()" class="quoteCard">
               <div class="box">
                   <div class="detail">{{ item[0] }}</div>
                   <div v-if="item[2] == null" class="quote">{{ item[1] }}</div>
                   <div v-else class="link" >
                       <a :href="item[2]" target="_blank" class="text">{{ item[1] }}</a>
                       <iconLink class="icon" theme="outline" size="16" fill="var(--vp-c-text-2)" />
                   </div>
   
               </div>
   
           </div>
       </div>
       </div>
   
   </template>
   
   
   <script setup>
   
   var isShow = ref(true)
   
   const props = defineProps({
       title: String,
       items: Object
   })
   
   function folder() {
       isShow.value = !isShow.value
   }
   
   </script>
   
   
   <script>
   
   import {
       Right as iconRight,
       LinkOne as iconLink
   } from '@icon-park/vue-next';
   import { ref } from 'vue';
   
   
   </script>
   
   <style scoped lang="less">
   .container {
       margin-bottom: 50px;
   
       .header {
           display: flex;
           justify-content: space-between;
           margin-bottom: 10px;
   
           .left {
               cursor: pointer;
               display: flex;
               align-items: center;
   
               .title {
                   line-height: 32px;
                   font-size: 24px;
                   font-weight: 600;
               }
   
               .iconRight {
                   transform: rotate(0deg);
                   transition: transform 0.25s;
                   margin-left: 5px;
   
                   &.rotated {
                       transform: rotate(90deg);
                   }
               }
           }
   
       }
   
       .quoteList {
           width: 100%;
           column-gap: 0;
           column-count: 3;
           transition: all .5s linear;
   
           @media (max-width: 860px) {
               column-count: 2;
           }
   
   
           @media (max-width: 419px) {
               column-count: 1;
           }
   
   
           a {
               text-decoration: inherit;
               outline: none;
               color: inherit;
           }
   
           .quoteCard {
               height: 100%;
               display: inline-block;
               margin: 10px;
               border: 1px solid var(--vp-c-bg-soft);
               border-radius: 12px;
               background-color: var(--vp-c-bg-soft);
               transition: border-color 0.25s, background-color 0.25s;
   
               @media (max-width: 419px) {
                   margin: 10px 0;
               }
   
   
               @media (min-width: 419px) {
                   &:hover {
                       border-color: var(--vp-c-brand);
                       background-color: var(--vp-c-bg-soft-up);
   
                   }
               }
   
   
   
   
               .box {
                   width: 100%;
                   padding: 20px 20px 15px 20px;
                   height: 100%;
                   align-items: center;
   
                   @media (max-width: 419px) {
                       padding: 15px 20px 10px 20px;
                   }
   
                   .detail {
                       font-family: "serif";
                       // font-weight: 400;
   
                       @media (max-width: 419px) {
                           font-size: 15px;
                           // line-height: 22px;
                       }
                   }
   
                   .quote {
                       font-size: 14px;
                       font-weight: 500;
                       color: var(--vp-c-text-2);
                       text-align: right;
                       margin-top: 5px;
   
                       @media (max-width: 419px) {
                           font-size: 13px;
                           // line-height: 22px;
                       }
                   }
   
                   .link {
                       display: flex;
                       align-items: center;
                       justify-content: flex-end;
   
                       .text {
                           text-decoration: underline;
                           font-size: 14px;
                           font-weight: 500;
                           color: var(--vp-c-text-2);
                           text-align: right;
                           margin-top: 5px;
                       }
   
                       .icon {
                           // float: right;
                           margin: 5px 0 0 4px;
                       }
                   }
   
   
               }
   
   
           }
       }
   }
   </style>
   ```

   :::

2. 使用

   ```vue
   <script setup>
   const items = [
       ["文本内容","来源"],
       ["文本内容2","来源2","url"],
   ]
   </script>
   
   <QuoteCard title="标题" :items ="items" />
   ```

3. 效果

   ![image-20230615214953574](https://s2.loli.net/2023/06/15/pWvZql5wcsBD3JK.png)


## 功能

### 侧边栏自动生成

因为目前没有侧边栏自动生辰的功能，而手动写的话又太累了，于是写了一个脚本自动生成sidebar，主要代码由ChatGPT生成，根据情况略作修改。

1. 新建一个`sidebar-auto.js`文件


::: details sidebar-auto.js

```js
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
        var fileLink = "/pages" + path.join(parentPath, pathName).replace(/\\/g, '/');

        // 如果frontmatter里有permalink数据的话 就用直接代替
        // if (data.permalink != null) {
        //   fileLink = "pages" + data.permalink
        // }
        const fileObject = { text: fileName, link: `${fileLink}` };
        const key = `/pages${parentPath}/`.replace(/\\/g, '/')

        if (sidebar[key]) {
          sidebar[key][0].items.push(fileObject);
        } else {
          var folderText = String(parentPath.replace(/\\/g, '/'))
          sidebar[key] = [{ text: folderText.split('/')[folderText.split('/').length - 1].toUpperCase(), items: [fileObject] }];

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
```

:::



2. 修改`config.js`

```js{4}
import { sidebar } from './sidebar'

export default defineConfig({
	//...
    sidebar: sidebar,
	//...
})
```

3. 修改`package.json`

```js{2}
"scripts": {
    "docs:dev": "node ./sidebar-auto.js && vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
}
```



<br><hr>

#### 参考链接

1. [CSS实现瀑布流的两种方式](https://juejin.cn/post/7011333433318178846)