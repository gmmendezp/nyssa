#!/usr/bin/env node
'use strict'
const program = require('commander')
const init = require('./front-end/init')

program
  .command('start <project-name>').alias('s')
  .description('Start a project in a new folder')
  .action(function (projectName) {
    init(projectName, projectName).catch(console.error)
  })

program
  .command('init <project-name>').alias('i')
  .description('Initialize a project in the current folder')
  .action(function (projectName) {
    init(projectName).catch(console.error)
  })

program.parse(process.argv)
