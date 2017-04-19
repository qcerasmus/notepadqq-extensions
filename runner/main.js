var NotepadqqApi = require("notepadqq-api").NotepadqqApi;
NotepadqqApi.connect(function(api) {
	api.onWindowInitialization(function(window) {
		var menuitemopenbrowser = window.addExtensionMenuItem(api.extensionId, "open file in browser");
		menuitemopenbrowser.on("triggered", function() {
			if(window.currentEditor().fileName() != null && window.currentEditor().fileName() != "") {
				var opn = require('opn');
				opn(window.currentEditor().fileName());
			}
		});
		
		var menuitemopenpython = window.addExtensionMenuItem(api.extensionId, "open file in terminal");
		menuitemopenpython.on("triggered", function() {
			if(window.currentEditor().fileName() != null && window.currentEditor().fileName() != "") {
				var spawn = require('child_process').spawn;
				var py = spawn('terminal', window.currentEditor().fileName());
			}
		});
   	});
});
