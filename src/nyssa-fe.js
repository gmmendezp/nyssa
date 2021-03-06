#!/usr/bin/env node
'use strict'
const program = require('commander')
const utils = require('./utils')

program
  .command('init-folder <project-folder>')
  .alias('if')
  .description('Start a project in a new folder')
  .action(projectFolder => utils.init('FE', projectFolder).catch(console.error))

program
  .command('init')
  .alias('i')
  .description('Initialize a project in the current folder')
  .action(() => utils.init('FE').catch(console.error))

program
  .command('generate <type>')
  .alias('g')
  .description('Run a generator')
  .action(type => utils.generate('FE', type).catch(console.error))

program.parse(process.argv)
