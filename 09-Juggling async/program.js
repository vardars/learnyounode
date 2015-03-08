var queuedcaller = require("./queuedcaller.js");

if (process.argv.length > 2){
	var urlParams = process.argv.slice(2);
	// console.log(urlParams.length);

	queuedcaller(urlParams, function(err, contents){
		if (err)
			console.error(err);

		for (var idx in contents) {
			console.log(contents[idx].urlContent);
		};
		// console.log(contents);
	});
}