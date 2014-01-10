function Service(serverArgs, setHeaderCallback, sucessCallback, errorCallback) {
	var xhr = Ti.Network.createHTTPClient();
	xhr.setTimeout(60 * 1000);
	xhr.onload = function(e) { 
		if(this.readyState == 4 && this.status == "200") {
			sucessCallback(this.resposeText);
		}
	};
    xhr.onerror = function(e) {
    	if(errorCallback !== undefined)
			errorCallback(e);
		else {
			Ti.API.info('Error in service ==> ' + JSON.stringify(e));
		}
    };
    xhr.open(serverArgs.action || 'POST', serverArgs.url);
    xhr.setRequestHeader("Content-Type", "application/json");
    if(setHeaderCallback !== undefined)
    	setHeaderCallback(xhr);
    if(serverArgs.file !== undefined)
    	xhr.file = file;
    	
    function send() {
    	if(serverArgs.action.toUppercase() === "POST")
    		xhr.send(serverArgs.params || {});
    	else
    		xhr.send();
    }
};

module.export = Service;