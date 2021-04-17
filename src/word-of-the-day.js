const DictionaryLogics = require("./utils");
const chalk = require("chalk");
class WordOfTheDay{

    constructor(){
        this.retrieve = new DictionaryLogics();
    }

    async run(){
        var word = await this.retrieve.getWordOfTheDay();
        this.display(word, def);   
    }

    display(word, def){
        if(def !== undefined){
            console.log(chalk.green("Definition of '" + word.toUpperCase() + "' => ", def));
        } else {
            console.log(chalk.red("OOPS!! This word is not available in the dictionary !!!"));
        }
    }

    runDef(word){
        var def = this.retrieve.getDefinition(word);
        console.log(chalk.green("Definition => ", def));
    }

}

module.exports = WordOfTheDay;