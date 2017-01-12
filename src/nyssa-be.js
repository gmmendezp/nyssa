#!/usr/bin/env node
'use strict'
const program = require('commander')
const init = require('./back-end/init')

program
  .command('start <project-name>').alias('s')
  .description('Start a project in a new folder')
  .action(projectName => init(projectName, projectName).catch(console.error))

program
  .command('init <project-name>').alias('i')
  .description('Initialize a project in the current folder')
  .action(projectName => init(projectName).catch(console.error))

program.parse(process.argv)
