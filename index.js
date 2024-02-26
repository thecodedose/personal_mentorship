const fs = require("fs")
const ejs = require("ejs")
const content = require("./content")

// Path to the EJS template file
const templatePath = "index.ejs"
// Path to the output HTML file
const outputPath = "index.html"

// Function to render HTML from the template
function renderHTML() {
  // Read the EJS template file
  fs.readFile(templatePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading template file:", err)
      return
    }

    // Render the template with data
    const renderedHTML = ejs.render(data, content)

    // Write the rendered HTML to the output file
    fs.writeFile(outputPath, renderedHTML, "utf8", (err) => {
      if (err) {
        console.error("Error writing HTML file:", err)
      }
      console.log("HTML file generated successfully!")
    })
  })
}

// Render HTML initially
renderHTML()

// Watch the template file for changes
fs.watch(templatePath, (eventType, filename) => {
  console.log(`Template file ${templatePath} changed.`)
  // Re-render HTML when the template file changes
  renderHTML()
})

console.log(`Watching template file ${templatePath} for changes...`)
