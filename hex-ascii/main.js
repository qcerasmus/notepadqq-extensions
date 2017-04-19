function ascii_to_hexa(str, currentEditor) {
	str = str.toString();
	for (var n = 0, l = str.length; n < l; n++) {
		var hex = Number(str.charCodeAt(n)).toString(16);
		currentEditor.setSelectionsText([hex]);
	}
}

function hexa_to_ascii(hexx) {
	var hex = hexx.toString();
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

var NotepadqqApi = require("notepadqq-api").NotepadqqApi;
NotepadqqApi.connect(function(api) {
	api.onWindowInitialization(function(window) {
		var menu2hex = window.addExtensionMenuItem(api.extensionId, "convert to hex");
		menu2hex.on("triggered", function() {
			var selectedtext = window.currentEditor().selectedTexts();
			ascii_to_hexa(selectedtext, window.currentEditor());
		});
		
		var menu2ascii = window.addExtensionMenuItem(api.extensionId, "convert to ascii");
		menu2ascii.on("triggered", function() {
			var selectedtext = window.currentEditor().selectedTexts();
			var convertedtext = hexa_to_ascii(selectedtext);
			window.currentEditor().setSelectionsText([convertedtext]);
		});
   	});
});
