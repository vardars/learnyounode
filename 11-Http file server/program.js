var fs = require("fs");
var bl = require("bl");
var http = require("http");

if (process.argv.length > 2){
	var portNumber = process.argv[2];
	var fileName = process.argv[3];
	
	var server = http.createServer(function(request, response){
		var src = fs.createReadStream(fileName);
		src.pipe(bl(function(err, data){
			var fileContent = data.toString();

			// response.write(fileContent);
			
			response.end(fileContent);
		}))
	});

	server.listen(portNumber);
}