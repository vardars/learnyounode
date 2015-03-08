var http = require("http");
var bl = require("bl");

if (process.argv.length > 2){
	var portNumber = process.argv[2];

	var server = http.createServer(function(req, res){
		if (req.method == "POST"){
			req.pipe(bl(function(err, data){
				var postDataContent = data.toString().toUpperCase();

				res.end(postDataContent);
			}));
		}
	});

	server.listen(portNumber);
}