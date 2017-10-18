var ReactNative = require('react-native');
var { Dimensions } = ReactNative;

var Utils = {

	dims: undefined,
	getWindowDimensions() {
		if (this.dims === undefined) {
			this.dims = {
				width: { value: Dimensions.get('window').width },
				height: { value: Dimensions.get('window').height }
			}
		}
		return this.dims;
	},

};
module.exports = Utils;



