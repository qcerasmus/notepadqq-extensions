# notepadqq-api
API for Notepadqq extensions in Node.js

[![npm version](https://badge.fury.io/js/notepadqq-api.svg)](http://badge.fury.io/js/notepadqq-api)

## Install

    npm install notepadqq-api

## Getting started

```javascript
// First, require the module
var NotepadqqApi = require("notepadqq-api").NotepadqqApi

// Connect to Notepadqq
NotepadqqApi.connect(function(api) {

    // Print the version of Notepadqq to the console
    console.log("Version " + api.notepadqq.version())

    // We initialize each window here
    api.onWindowInitialization(function(window) {

        // Add a new menu item
        var menu = window.addExtensionMenuItem(api.extensionId, "My menu")

        // Add an handler to the "triggered" event of the menu item: it
        // will be called when the user clicks on the menu.
        menu.on("triggered", function() {

            // Replace the selected text in the currently opened tab
            // with the string "Hello World"
            window.currentEditor().setSelectionsText(["Hello World"]);

        });

    });

});
```
