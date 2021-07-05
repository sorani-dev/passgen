const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')

/**
 * Save password and append it to "passwords.txt" file
 * @param {string} password - The password to save
 */
const savePassword = (password) => {
    fs.open(path.join(__dirname,'../','passwords.txt'),'a',666,(e,id) => {
        fs.write(id,password + os.EOL,null,'utf-8',(e,id) => {
            fs.close(id,() => {
                console.log(chalk.green('Password saved to passwords.txt'));
            })
        })
    })
}

module.exports = savePassword
