var http = require("http");
var bl = require("bl");

module.exports = function(urls, callback) {
	var count = urls.length,
		contents = {};

	for (var i = 0; i < urls.length; i++) {
		var url = urls[i];
		getUrlContent(url, i, function(urlContent, idx){
			contents[idx] = { "i" : idx, "urlContent" : urlContent };

			count--;
			if (count <= 0) {
				callback(null, contents);
			}
		});
	};
}

var getUrlContent = function(url, idx, callback){
	http.get(url, function(response) {
		response.setEncoding("utf8");

		response.pipe(bl(function(err, data) {
			if (err)
				return callback(err);

			urlContent = data.toString();
			callback(urlContent, idx);
		}));
	});
}