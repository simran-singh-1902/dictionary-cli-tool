const Dictionary = require('../models/dictionary');
const chalk = require('chalk')

class Synonyms {

    constructor(word){
        this.word = word;
    }
    
    displaySynonyms(syn) {
        console.log(chalk.green(syn));
    }

}

module.exports = Synonyms;