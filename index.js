module.exports = function search (keyword, request, access_token, done) {
	done = done || {};
	
	keyword = encodeURIComponent(keyword);

	var url = 'https://api.github.com/search/repositories?q=' + keyword + '&language%3Ajavascript&access_token=' + access_token, 
		opts = {
			headers: {'User-Agent': 'duo-search'},
			url: url,
			json: true
		};

	request(opts, function (error, response, body) {
		if (error) {
			throw error;
		}

		var code = response.statusCode;
		if (code !== 200) {
			var e = new Error('Got HTTP status ' + code);
			e.statusCode = code;
			throw e;
		}

		return done(body.items, body, response);
	});
};
