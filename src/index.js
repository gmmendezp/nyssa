#!/usr/bin/env node
'use strict'
const program = require('commander')
const initFE = require('./front-end/init')

program.version('0.0.1')

program
  .command('start <project-name>').alias('s')
  .description('Start a project in a new folder')
  .action(function (projectName) {
    initFE(projectName, `${projectName}/fe`).catch(console.error)
    // initBE(projectName, `be/${projectPath}`)
  })

program
  .command('init <project-name>').alias('i')
  .description('Initialize a project in the current folder')
  .action(function (projectName) {
    initFE(projectName, 'fe').catch(console.error)
    // initBE(projectName, 'be')
  })

program
  .command('fe', 'Call a front-end command')
  .command('be', 'Call a back-end command')

program.parse(process.argv)
