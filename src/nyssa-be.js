#!/usr/bin/env node
'use strict'
const program = require('commander')

program
  .command('start <project-name>').alias('s')
  .description('Start a project in a new folder')
  .action(function (projectName) {
    console.log(`Generating back end for project ${projectName}...`)
  })

program
  .command('init <project-name>').alias('i')
  .description('Initialize a project in the current folder')
  .action(function (projectName) {
    console.log(`Generating back end for project ${projectName}...`)
  })

program.parse(process.argv)
