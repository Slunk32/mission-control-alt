'use strict'

const watchBabel = require("watch-babel")

const srcDir = "src"
const destDir = "src-build"
const watcher = watchBabel(srcDir, destDir)

watcher.on("ready", function() {
  console.log("ready")
})

watcher.on("success", function(filepath) {
  console.log("Transpiled ", filepath)
})

watcher.on("failure", function(filepath, e) {
  console.log("Failed to transpile", filepath, "(Error: ", e)
})

watcher.on("delete", function(filepath) {
  console.log("Deleted file", filepath)
})
