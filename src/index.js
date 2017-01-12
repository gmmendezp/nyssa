#!/usr/bin/env node
'use strict'
const program = require('commander')
const initFE = require('./front-end/init')
const initBE = require('./back-end/init')

program.version('0.0.1')

program
  .command('start <project-name>').alias('s')
  .description('Start a project in a new folder')
  .action(function (projectName) {
    initFE(projectName, `${projectName}/site`)
      .then(() => initBE(projectName, `${projectName}/server`))
      .catch(console.error)
  })

program
  .command('init <project-name>').alias('i')
  .description('Initialize a project in the current folder')
  .action(function (projectName) {
    initFE(projectName, 'site')
      .then(() => initBE(projectName, 'server'))
      .catch(console.error)
  })

program
  .command('fe', 'Call a front-end command')
  .command('be', 'Call a back-end command')

program.parse(process.argv)
