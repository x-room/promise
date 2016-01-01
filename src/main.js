var Promise = function(){
	this.successesCallback = [];
}

Promise.prototype.then = function(success){
	console.log("add success");
	this.successesCallback.push(success);
}

var Defer = function(){
	this.promise = new Promise();
}

Defer.prototype.resolve = function(){
	console.log("defer resolve is calling");
	console.log("2promise of defer:" + this.promise)
	this.promise.successesCallback[0]();
}

var remoteCall = function(callBack){
	for(var i = 0; i < 1000000000; i++){
	}
	callBack();
}

var callRemote = function(){
	var defer = new Defer();
	console.log("promise of defer:" + defer.promise)
	console.log("set timer for remote call");
	setTimeout(function(){remoteCall(defer.resolve)}, 0);
	console.log("remote call is triggered");

	return defer.promise;
}

callRemote().then(function(){console.log("Hello, server call done")});


// module.exports = Defer;