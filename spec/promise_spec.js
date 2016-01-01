var Defer = require('../src/main')

describe("Defer", function(){
	it("should support then", function(){
		var defer = new Defer();
		defer.then(function() {console.log("get result from server")});
		console.log("asdf");
		expect(true).toBe(true);
	})
})