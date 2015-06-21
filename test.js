'use strict';
var test = require('ava');
var vinylFile = require('vinyl-file');
var vinylAssign = require('./');

test('assign custom attributes', function (t) {
	t.plan(1);

	var file = vinylFile.readSync('index.js');
	var stream = vinylAssign({foo: 'bar'});

	stream.on('data', function (file) {
		t.assert(file.foo === 'bar', file.foo);
	});

	stream.end(file);
});
