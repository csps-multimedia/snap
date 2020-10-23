//DO NOT MODIFY ↓
define([
    'jquery'
], function($) {
//DO NOT MODIFY ↑

	function initialize() {
		setEvents();
	}

	function setEvents() {
		$(masterStructure)
			.on("Framework:systemReady", function() {
				systemReady();
			})
			.on("Framework:pageLoaded", function() {
				pageLoaded();
			});
	}

	/* is called only once, when the Course has loaded*/
	function systemReady() {
		//console.log("Interactions:systemReady");
	}

	/* is called on every page load, great for adding custom code to all pages*/
	function pageLoaded() {
		toggleType();
	}
	
	function toggleType(){
		var $toggle=$("[data-LOM-toggle-type='next']");
		var $togglables=$toggle.next();
		$toggle.click(function(){
			var $thisOne=$(this).next();
			var isVisible=$thisOne.is(":visible"); 
			$togglables.hide();
			if(isVisible){
			   $thisOne.hide();
			}else{
				   
			   $thisOne.show();
			   }
		});

	}



	initialize();
});