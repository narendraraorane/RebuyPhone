/*
 * Author - Narendra Raorane.
 * Created On - 8/12/2013
 * Purpose - Product listing page controller.
 */

var args = arguments[0] || {};
Ti.API.info("args ==> "+JSON.stringify(args));

$.lstvwProdList.addEventListener('itemclick', function(e){
    var item = e.section.getItemAt(e.itemIndex);
    Ti.API.info('item ==> ' + JSON.stringify(item));
	var winProdDetail = Alloy.createController('prodDetail', {
        searchValue: "fe"
    }).getView();
	Alloy.Globals.openWindow(winProdDetail);
});

function winFocus() {
	Alloy.Globals.currentWindow = $.winProdList;
}