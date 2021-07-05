const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

/**
 * Delete "passwords.txt" file
 */
const clearPassword = () => {
    fs.rm(path.join(__dirname,'../','passwords.txt'),(e) => {
        if (e) {
            console.log(chalk.red('Could not empty file'))
            return
        }
        console.log(chalk.blue('Removed password.txt file'))
    })
}

module.exports = clearPassword
