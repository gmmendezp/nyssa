#!/usr/bin/env node
'use strict'
const program = require('commander')

program
  .command('init <project-name>').alias('i')
  .description('Initialize a project in the current folder')
  .action(function (projectName) {
    require('./front-end/init')(projectName).catch(console.error)
  })

program.parse(process.argv)
