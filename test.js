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

test('should not overwrite existing attributes', function (t) {
	t.plan(1);

	var file = vinylFile.readSync('index.js');
	var stream = assign({path: 'bar'});

	stream.on('data', function (file) {
		t.assert(file.path !== 'bar');
	});

	stream.end(file);
});
