var http = require("http");
var url = require("url");

if (process.argv.length > 2){
	var portNumber = process.argv[2];

	var server = http.createServer(function(req, res){
		res.writeHead(200, { 'Content-Type': 'application/json' });

		var urlParams = url.parse(req.url, true);

		var responseContent = {};

		switch (urlParams.pathname){
			case "/api/parsetime":
				responseContent = getISOTimeResponse(urlParams.query.iso);
				break;
			case "/api/unixtime":
				responseContent = getUnixTimeFormat(urlParams.query.iso);
				break;
		}

		res.end(JSON.stringify(responseContent));
	});

	server.listen(portNumber);
}

var getISOTimeResponse = function(dateStr){
	var date = new Date(dateStr);

	return {
		"hour" : date.getHours(),
		"minute" : date.getMinutes(),
		"second" : date.getSeconds()
	};
};

var getUnixTimeFormat = function(dateStr){
	var date = new Date(dateStr);

	return {
		"unixtime": date.getTime()
	};
};