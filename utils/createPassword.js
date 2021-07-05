const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*_-+='

/**
 * Create a Password
 * 
 * @param {string} length Password required length
 * @param {boolean} hasNumbers Generate with numbers?
 * @param {boolean} hasSymbols Generate with symbols?
 * @returns {string}
 */
const createPassword = (length = 8,hasNumbers = true,hasSymbols = true) => {
    let chars = alpha
    hasNumbers ? (chars += numbers) : ''
    hasSymbols ? (chars += symbols) : ''
    return generatePassword(length,chars)
}

/**
 * Generate a password
 * 
 * @param {number} length - Password length
 * @param {string} chars - chars to use for the password
 * @returns {string}
 */
const generatePassword = (length,chars) => {
    let password = ''
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return password
}

module.exports = createPassword