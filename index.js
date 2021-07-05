#! /usr/bin/env node

const { program } = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')

const log = console.log
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')
const clearPassword = require('./utils/clearPassword')

program.version('1.0.0').description('Simple Password Generator')

program
    .option('-l, --length <length>','length of password','8')
    .option('-s, --save','save password to passwords.txt')
    .option('-nn --no-numbers','remove numbers')
    .option('-ns --no-symbols','remove symbols')
    .option('-c, --clear','remove passwords.txt')
    .parse()

const { length,save,numbers,symbols,clear } = program.opts()

// Get generated password
const generatedPassword = createPassword(length,numbers,symbols)

// Clear password file
if (clear) {
    clearPassword()
}

// Save to file
if (save) {
    savePassword(generatedPassword)
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword)

// Output generated password
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword))
log(chalk.yellow('Password copied to clipboard'))
