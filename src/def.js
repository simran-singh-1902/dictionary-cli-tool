const Dictionary = require('../models/dictionary');
const chalk = require('chalk')

class Definition {

    constructor(word){
        this.word = word;
    }
    
    displayDefinition(def) {
        console.log(chalk.green(def));
    }

}

module.exports = Definition;