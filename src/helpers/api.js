import Utils from './../helpers/utils'
var api = {
	baseAddress: "https://mysterious-falls-75183.herokuapp.com/",
	//baseAddress: "http://192.168.1.209:3000/",
	responseType: "?response-format=json/",
	
	getHoteslUrl:  function(){
		return this.baseAddress + "hotels/" 
	},

}

module.exports = api;