#!/usr/bin/env node

import program from 'commander';

import data from './package.json';

program
  .version(data.version)
  .usage('[options] <name>')
  .option('-n, --name', 'Migration name')

