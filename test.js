'use strict';

var assign = require('./');
var test = require('ava');
var vinylFile = require('vinyl-file');

test('assign custom attributes', function (t) {
	t.plan(1);

	var file = vinylFile.readSync('index.js');
	var stream = assign({foo: 'bar'});

	stream.on('data', function (file) {
		t.assert(file.foo === 'bar');
	});

	stream.end(file);
});
