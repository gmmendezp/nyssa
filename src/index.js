#!/usr/bin/env node
'use strict'
const program = require('commander')

program
  .version('0.0.1')
  .command('start <project-name>').alias('s')
  .description('Start a project in a new folder')
  .action(function () {
    console.log(1)
  })

program
  .command('init <project-name>').alias('i')
  .description('Initialize a project in the current folder')
  .action(function () {
    console.log(2)
  })

program
  .command('fe', 'Call a front-end command')
  .command('be', 'Call a back-end command')

program.parse(process.argv)
