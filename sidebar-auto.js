const fs = require('fs')
const path = require("path")

let sidebar = []

// go through all folders, filter bad ones
let folders = fs.readdirSync("docs/pages")
	.filter(folder => !(folder.startsWith(".") || folder.startsWith("_") || folder.endsWith(".md") || folder == 'public'))
	.forEach(folder => {
		// create item entries
		let items = fs.readdirSync(path.join("docs/pages", folder))
			.filter(item => item.endsWith(".md"))
			.map(item => {
				const title = item.slice(0, -3)
				return { text: title.replaceAll("-", " "), link: ["", folder, title].join("/") }
			})
		
		// push category into sidebar
		sidebar.push({
			text: folder,
			collapsible: true,
			items: items
		})
})

console.log(sidebar)

// syntax needed by vitepress
const prepend = `export const sidebar = `

fs.writeFileSync("docs\\.vitepress\\test.js", prepend + JSON.stringify(sidebar, null, 4))
console.log("generated sidebar")

// sidebar.forEach(cat => console.log(cat))
// folders.forEach(f => console.log(f, typeof f))