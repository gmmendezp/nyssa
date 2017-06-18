#!/usr/bin/env node
'use strict'
const program = require('commander')
const initFE = require('./front-end/init')
const initBE = require('./back-end/init')

program.version('0.0.1')

program
  .command('init-folder <project-folder>')
  .alias('if')
  .description('Start a project in a new folder')
  .action(projectFolder =>
    initFE(projectFolder, `${projectFolder}/client`)
      .then(() => initBE(`${projectFolder}/server`))
      .catch(console.error)
  )

program
  .command('init')
  .alias('i')
  .description('Initialize a project in the current folder')
  .action(() =>
    initFE('client').then(() => initBE('server')).catch(console.error)
  )

program
  .command('fe', 'Call a front-end command')
  .command('be', 'Call a back-end command')

program.parse(process.argv)
