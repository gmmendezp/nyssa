# Nyssa

Project generation for full stack development with [React](https://facebook.github.io/react/) and [Feathers](https://feathersjs.com/). This project uses [nyssa-fe](https://www.npmjs.com/package/generator-nyssa-be) and [nyssa-fe](https://www.npmjs.com/package/generator-nyssa-fe) as base for the generated projects.

## Usage

First, install nyssa globally using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g nyssa
```

## Global Commands

### `nyssa init`
  To generate projects in the current folder. It will create the different projects inside their respective folders(`client` or `server`).
### `nyssa init-folder <project-folder>`
  To generate projects inside a folder called `<project-folder>`. It will create the different projects inside their respective folders(`client` or `server`).

## FE Commands

### `nyssa fe init` or `nyssa-fe init`
  To generate a FE project inside the current folder.
### `nyssa fe init-folder <project-folder>` or `nyssa-fe init-folder <project-folder>`
  To generate a FE project inside a folder called `<project-folder>`.
### `nyssa fe g <type>`
  To call a sub-generator for type. The possible types are:
  - `action`: generate a new redux action
  - `component`: generate a new react/redux component
  - `epic`: create a new redux-observable epic
  - `form`: create a new form with redux form
  - `reducer`: create a new redux reducer

## BE Commands

### `nyssa be init` or `nyssa-be init`
  To generate a BE project inside the current folder.
### `nyssa be init-folder <project-folder>` or `nyssa-be init-folder <project-folder>`
  To generate a BE project inside a folder called `<project-folder>`.
### `nyssa be g <type>`
  To call a sub-generator for type. The possible types are:
  - `auth`: to create all the authentication files
  - `connection`: to configure a connection to a DB
  - `hook`: create hooks for the different services
  - `middleware`: create express middleware and add it
  - `service`: generate a new service
