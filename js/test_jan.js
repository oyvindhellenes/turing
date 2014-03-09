var initiateButton = function() {
	var btnFunctions = {
		element: null,
		activateBtn: function(btn) { 
			btn.disabled = false; 
		},
		btnOnClick: function(mouseEvent) {
			console.log("Button onclick");
			var btn = mouseEvent.srcElement;
			btn.disabled = true;
		},
		btnEventListener: function(mouseEvent) {
			console.log("Button event listener");
			var btn = mouseEvent.srcElement;
			setTimeout(btnFunctions.activateBtn, 1000, btn);
		}
	};
	
	var el = document.getElementById("clickMe");
	if (! el) { 
		console.error("test");
		return; 
	}
	
	el.onclick = btnFunctions.btnOnClick;
	
	if (el.addEventListener) {
		el.addEventListener("click", btnFunctions.btnEventListener, false);
	} else if (el.attachEvent) {
		el.attachEvent('onclick', btnFunctions.btnOnClick);
	}
};

var ready = function() {
	console.log("Ready");
	
	initiateButton();
};
