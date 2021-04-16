const DictionaryLogics = require("./utils.js");
const chalk = require('chalk')

class WordOfTheDay {

    constructor(){
        this.getData = new DictionaryLogics();
    }
    
    retrieveWOD(){
        var result = this.getData.wordOfTheDay();
        console.log("HERE",result);
    }

    displayWOD(word, def) {
        console.log(chalk.green(`Definition of "`+word+`" is -> `,def));
    }

}

module.exports = WordOfTheDay;