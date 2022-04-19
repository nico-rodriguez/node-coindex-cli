#!/usr/bin/env node
import { program } from 'commander';

program
  .version('1.0.0')
  .description('An Node CLI for querying digital coin prices');

program.command('key', 'Manage API key -- https://nomics.com');

program.command('check', 'Check coin price info');

program.parse(process.argv);
