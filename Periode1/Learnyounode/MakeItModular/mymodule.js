const fs = require('fs');
const path = require('path');

function filter(dirName, extension, callback) {
	fs.readdir(dirName, 'utf8', (err, data) => {
		if (err) {
			return callback(err);
		} else {
			return callback(
				null,
				data.filter(element => path.extname(element) === '.' + extension)
			);
		}
	});
}
module.exports = filter;