var dirfilter = require("./dirfilter.js");

if (process.argv.length > 2){
	var dirName = process.argv[2];
	var filterExtension = process.argv[3];
	dirfilter(dirName, filterExtension, function(err, list){
		if (!err){
			for (var i = 0; i < list.length; i++) {
				console.log(list[i]);
			};
		} else {
			console.error(err);
		}
	});
}