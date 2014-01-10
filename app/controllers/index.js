/*
 * Author - Narendra Raorane.
 * Created On - 8/12/2013
 * Purpose - Landing/Home page controller.
 */

Alloy.Globals.currentTab = $.tbIndex;

function searchProd(e) {
	Ti.Database.open("my.db");
	Ti.API.info("e ==> " + JSON.stringify(e));
	var winProdList = Alloy.createController('prodList', {
        searchValue: "fe"
    }).getView();
    Alloy.Globals.openWindow(winProdList);
}

if(Ti.Platform.name === "android")
	Alloy.Globals.openWindow($.winIndex);
else if(Ti.Platform.name === "iPhone OS")	
	$.tbgrpIndex.open({fullscreen: false});

function getProdList() {
	//searchProd();
	Ti.UI.orientation = Ti.UI.LANDSCAPE_LEFT;
	/*Ti.Gesture.addEventListener('orientationchange', function(e) {
		alert(e.orientation);
		Ti.API.info('orientation change ==> ' + e.orientation);
	});*/
}

function getAboutUsInfo() {
	
}