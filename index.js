#!/usr/bin/env node

'use strict';

// Use command-line-args instead of commander.js because need options with multiple values
// https://github.com/tj/commander.js/issues/674
const cla = require('command-line-args');
const clu = require('command-line-usage')
const pkginfo = require('pkginfo')(module, 'version');
const tw = require('taiwan-weather');

// Define expected options
// Used by command-line-args and command-line-usage
const optDef = [{
		name: 'api-key',
		alias: 'k',
		type: String,
		description: 'Required API key'
	},
	{
		name: 'loc',
		alias: 'l',
		type: String,
		multiple: true,
		description: 'List of locations to download'
	},
	{
		name: 'freq',
		alias: 'f',
		type: String,
		multiple: true,
		description: 'List of frequencies to download'
	},
	{
		name: 'lang',
		alias: 'L',
		type: String,
		multiple: true,
		description: 'List of languages to download'
	},
	{
		name: 'output',
		alias: 'o',
		type: String,
		description: 'Output directory'
	},
	{
		name: 'prefix',
		alias: 'p',
		type: String,
		description: 'Files prefix'
	},
	{
		name: 'json',
		alias: 'j',
		type: Boolean,
		description: 'Convert XML files to JSON files'
	},
	{
		name: 'verbose',
		alias: 'V',
		type: Boolean,
		description: 'Turn on debugging logs'
	},
	{
		name: 'help',
		alias: 'h',
		type: Boolean,
		description: 'Print this usage guide'
	},
	{
		name: 'version',
		alias: 'v',
		type: Boolean,
		description: 'Print version number'
	}
];

// Parse input options
const opt = cla(optDef);

// Convert enum values into technical values
const loc = opt.loc && opt.loc.map(l => tw.DataEnum.Loc[l]);
const freq = opt.freq && opt.freq.map(f => tw.DataEnum.Freq[f]);
const lang = opt.lang && opt.lang.map(l => tw.DataEnum.Lang[l]);

if (opt.version) {
	// Only display version number
	console.log(module.exports.version);
} else if (opt.help) {
	// Only display usage documentation
	console.log(clu(
		[{
				header: 'taiwan-weather-CLI',
				content: [
					'A CLI for taiwan-weather node.js module',
					'',
					'Usage: `tw --api-key <api key> [options]`'
				]
			},
			{
				header: 'Options',
				optionList: optDef
			}
		]
	));
} else {
	// Download files with specified options
	tw.get(opt['api-key'], {
		loc: loc,
		freq: freq,
		lang: lang,
		output: opt.output,
		prefix: opt.prefix,
		toJson: opt.json,
		debug: opt.verbose
	}, (err) => {
		if (err) {
			// Use global.__logger from taiwan-weather module
			__logger.error(err);
		}
	});
}
