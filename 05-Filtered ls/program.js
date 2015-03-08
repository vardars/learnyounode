var fs = require("fs");

if (process.argv.length > 2){
	var dirName = process.argv[2];
	var filterExtension = "." + process.argv[3];
	fs.readdir(dirName, function(err, list){
		for (var i = 0; i < list.length; i++) {
			var fileName = list[i];
			if (fileName.indexOf(filterExtension) > -1)
				console.log(fileName);
		};
	});
}