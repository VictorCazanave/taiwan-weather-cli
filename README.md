# taiwan-weather-CLI

[![Dependency Status](https://david-dm.org/VictorCazanave/taiwan-weather-cli.svg)](https://david-dm.org/VictorCazanave/taiwan-weather-cli)
[![NSP Status](https://nodesecurity.io/orgs/victorcazanave/projects/e1209cfb-15e0-43dd-b14d-3764e5fb9b04/badge)](https://nodesecurity.io/orgs/victorcazanave/projects/e1209cfb-15e0-43dd-b14d-3764e5fb9b04)

A CLI for [taiwan-weather](https://www.npmjs.com/package/taiwan-weather) node.js module.

This is just a wrapper that does not add any features.

## Installation
`npm install taiwan-weather-cli`

## Usage

With default values:

`tw --api-key <API_KEY>`

With options:

`tw --api-key <API_KEY> [--loc <LOCATION_1> <LOCATION_2>...] [--freq <FREQUENCY_1> <FREQUENCY_2>...] [--lang <LANGUAGE_1> <LANGUAGE_2>] [--ouput <OUTPUT_DIR>] [--prefix <FILES_PREFIX>] [--json]`

## Documentation

CLI documentation: `tw --help`

Available values for [`--loc`](https://www.npmjs.com/package/taiwan-weather#dataenumloc), [`--freq`](https://www.npmjs.com/package/taiwan-weather#dataenumfreq) and [`--lang`](https://www.npmjs.com/package/taiwan-weather#dataenumlang).

## Example

`tw --api-key 1234-5678-ABCD-EFGH --loc TAIPEI_CITY HSINCHU_COUNTY --freq WEEKDAY --lang EN --output ./data --json`
