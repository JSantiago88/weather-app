const args = require('yargs')
    .command('search', 'make a search the weather for a city', {
        city: {
            default: 'Santiago De Chile',
            alias: 'c'
        }
    })
    .help()
    .argv

module.exports = {
    args
};