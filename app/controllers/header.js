/*
 * Author - Narendra Raorane.
 * Created On - 8/12/2013
 * Purpose - Common header controller.
 */


function goBack() {
    if(Ti.Platform.name === "android") {
    	Alloy.Globals.currentWindow.close();
    }
	else if(Ti.Platform.name === "iPhone OS") {
		Alloy.Globals.currentTab.close(Alloy.Globals.currentWindow);
	}
}
