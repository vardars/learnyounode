var net = require("net");
var strftime = require("strftime");

if (process.argv.length > 2){
	var portNumber = process.argv[2];
	
	var server = net.createServer(function(socket){
		var responseData = strftime("%F %H:%M");

		// socket.write("test");

		socket.end(responseData);
	});

	server.listen(portNumber);
}