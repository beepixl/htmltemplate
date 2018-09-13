var smartadmin;

smartadmin = {
	colors: {
		"blue": "#3276b1",
		"blue-sky":  "#0091d9",
		"bg-blue": "#57889c",
		"blue-light": "#92a2a8",
		"blue-dark": "#4c4f53",
		"green": "#356e35",
		"green-light": "#71843f",
		"green-dark": "#496949",
		"green-bright": "#40ac2b",
		"green-bright-1": "#aafaaf",
		"red": "#a90329",
		"yellow": "#b09b5b",
		"orange" : "#c79121",
		"orange-dark": "#a57225",
		"orange-bright":  "#ffc40d",
		"pink": "#ac5287;",
		"pink-dark": "#a8829f",
		"purple": "#6e587a",
		"offwhite": "#f8f8f8",
		"darken": "#404040",
		"lighten":   "#d5e7ec",
		"white": "#ffffff",
		"grey-dark": "#525252",
		"magenta": "#6e3671;",
		"primary": "#3276b1",
		"success": "#739e73",
		"danger": "#a90329",
		"teal": "#568a89",
		"red-light": "#a65858",
		"red-bright": "#ed1c24",
		"teal-light": "#0aa66e",
		"warning": "#c09853",
		"blue-light2": "#058dc7",
		"btnBlue": "#57889c",
		"light": "#fff",
		"dark": "#494949",
		"lightYellow": "#FFFFE0",
		"light-grey": "#A0A0A0",
		"brown": "#797979"
	},
	classesName: {
		fullScreen: 'sa-full-screen',
		shortcutsSection: 'sa-shortcuts-section'
	},

	toggleReloadButton : {

		resetHTML 	: "<i class=\"fa fa-refresh\"></i>",
		loadingHTML : "<i class=\"fa fa-refresh fa-spin\"></i> Loading..."
	},

	trunOnFullScreen: function(){

		if (document.documentElement.requestFullScreen) {  

	      document.documentElement.requestFullScreen();  

	    } else if (document.documentElement.mozRequestFullScreen) {  

	      document.documentElement.mozRequestFullScreen();  

	    } else if (document.documentElement.webkitRequestFullScreen) {  

	      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  

	    }
	    $('body').addClass(smartadmin.classesName.fullScreen); 

	},

	trunOffFullScreen: function(){

		if (document.cancelFullScreen) {  

	      document.cancelFullScreen();  

	    } else if (document.mozCancelFullScreen) {  

	      document.mozCancelFullScreen();  

	    } else if (document.webkitCancelFullScreen) {  

	      document.webkitCancelFullScreen();  

	    }

	    $('body').removeClass(smartadmin.classesName.fullScreen);

	},

	launchFullscreen: function() {

     if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {

	    this.trunOnFullScreen();

	  } else {  
	  	this.trunOffFullScreen();    

	  } 

    },
    // RESET WIDGETS
	resetWidgets: function($this){
		
		$.SmartMessageBox({
			title : "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
			content : $this.data('reset-msg') || "Would you like to RESET all your saved widgets and clear LocalStorage?1",
			buttons : '[No][Yes]'
		}, function(ButtonPressed) {
			if (ButtonPressed == "Yes" && localStorage) {
				localStorage.clear();
				location.reload();
			}

		});
	}
}

jQuery.fn.doesExist=function(){return jQuery(this).length>0}