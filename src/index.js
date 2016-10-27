#!/usr/bin/env node
'use strict'
const program = require('commander')

program.version('0.0.1')

program
  .command('init <project-name>').alias('i')
  .description('Initialize a project in the current folder')
  .action(function (projectName) {
    require('./front-end/init')(projectName).catch(console.error)
    // require('./back-end/init')()
  })

program
  .command('fe', 'Call a front-end command')
  .command('be', 'Call a back-end command')

program.parse(process.argv)
