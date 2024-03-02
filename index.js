const fs = require("fs")
const ejs = require("ejs")
const content = require("./content")

const ejsFilePath = "index.ejs"
const htmlOutputPath = "index.html"

function renderHTML() {
  ejs.renderFile(ejsFilePath, content, {}, function (err, str) {
    if (err) {
      console.error("Error compiling EJS:", err)
      return
    }
    fs.writeFileSync(htmlOutputPath, str)
    console.log(`Compiled ${ejsFilePath} to ${htmlOutputPath}`)
  })
}

// Render HTML initially
renderHTML()

fs.watch(ejsFilePath, (eventType, filename) => {
  if (filename && eventType === "change") {
    console.log(`${filename} file Changed, recompiling...`)
    renderHTML()
  }
})

console.log(`Watching template file ${ejsFilePath} for changes...`)
