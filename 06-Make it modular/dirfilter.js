var fs = require("fs");
var path = require("path");

module.exports = function(dirName, filterExtension, callback) {
	var filesMatched = [];
	filterExtension = "." + filterExtension;
	fs.readdir(dirName, function(err, list){
		if (err)
			return callback(err);
		
		for (var i = 0; i < list.length; i++) {
			var fileName = list[i];
			if (path.extname(fileName) === filterExtension)
				filesMatched.push(fileName);
		};
		callback(err, filesMatched);
	});
}