#!/usr/bin/env node
'use strict'
const program = require('commander')
const init = require('./back-end/init')

program
  .command('init-folder <project-folder>')
  .alias('if')
  .description('Start a project in a new folder')
  .action(projectFolder => init(projectFolder).catch(console.error))

program
  .command('init')
  .alias('i')
  .description('Initialize a project in the current folder')
  .action(() => init().catch(console.error))

program.parse(process.argv)
