var fs = require("fs");
var newlineRegexp = new RegExp("\\n", "g");

if (process.argv.length > 2){
	var fileName = process.argv[2];
	var fileContent = fs.readFileSync(fileName).toString();
	// console.log(fileContent);
	if (typeof fileContent != "undefined"){
		var newlineCount = (fileContent.match(newlineRegexp) || []).length;
		console.log(newlineCount);
	}
}