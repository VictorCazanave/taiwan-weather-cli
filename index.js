#!/usr/bin/env node

'use strict';

const pkginfo = require('pkginfo')(module, 'version');
const program = require('commander');
const tw = require('taiwan-weather');

const list = val => val.split(',');

program
	.version(module.exports.version, '-v, --version')
	.option('-k, --api-key <value>', 'required API key')
	.option('-l, --loc [items]', 'list of locations to download', list)
	.option('-f, --freq [items]', 'list of frequencies to download', list)
	.option('-L, --lang [items]', 'list of languages to download', list)
	.option('-o, --output [path]', 'output directory')
	.option('-p, --prefix [value]', 'files prefix')
	.option('-j, --json', 'convert XML files to JSON files')
	.option('-V, --verbose', 'verbose mode to display logs')
	.parse(process.argv);

if(program.apiKey) {
	tw.get(program.apiKey, {
		loc: program.loc,
		freq: program.freq,
		lang: program.lang,
		output: program.output,
		prefix: program.prefix,
		toJson: program.json
	}, (err) => {
		if (err) {
			console.error(err);
		} else {
			console.log('All files have been downloaded.');
		}
	});
} else {
	console.error(`\n  error: option '-k, --api-key' is required\n`);
}

