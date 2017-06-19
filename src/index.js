#!/usr/bin/env node
'use strict'
const program = require('commander')
const utils = require('./utils')

program.version('1.0.0')

program
  .command('init-folder <project-folder>')
  .alias('if')
  .description('Start a project in a new folder')
  .action(projectFolder =>
    utils
      .init('FE', projectFolder, `${projectFolder}/client`)
      .then(() => utils.init('BE', `${projectFolder}/server`))
      .catch(console.error)
  )

program
  .command('init')
  .alias('i')
  .description('Initialize a project in the current folder')
  .action(() =>
    utils
      .init('FE', 'client')
      .then(() => utils.init('BE', 'server'))
      .catch(console.error)
  )

program
  .command('fe', 'Call a front-end command')
  .command('be', 'Call a back-end command')

program.parse(process.argv)
