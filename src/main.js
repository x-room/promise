var Promise = function(){
	this.successesCallback = [];
}

Promise.prototype.then = function(success){
	this.successesCallback.push(success);
}

var Defer = function(){
	var promise = new Promise();
	console.log(promise);
	
	var remoteCall = function(callBack){
		for(var i = 0; i < 1000000000; i++){
		}
		console.log("after remote call");
		console.log(callbck);
		callBack();
	}

	remoteCall(promise.successesCallback[0])



	return promise;
}

module.exports = Defer;