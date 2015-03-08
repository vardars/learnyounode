var fs = require("fs");
var newlineRegexp = new RegExp("\\n", "g");

if (process.argv.length > 2){
	var fileName = process.argv[2];
	fs.readFile(fileName, function(err, data){
		var fileContent = data.toString();
		var newlineCount = (fileContent.match(newlineRegexp) || []).length;
		console.log(newlineCount);
	});
}