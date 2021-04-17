const DictionaryLogics = require("./utils");
const chalk = require("chalk");
class WordOfTheDay{

    constructor(){
        this.retrieve = new DictionaryLogics();
    }

    async run(word){
        if(word == undefined){
            var word = await this.retrieve.getWordOfTheDay();
            var dict = await this.retrieve.getDictionary(word);
            this.displayWOD(dict);
        } else {
            var wordExist = await this.retrieve.wordInDictionary(word);
            if(wordExist){
                var dict = await this.retrieve.getDictionary(word);
                this.displayDict(dict);
            }
            else {
                console.log(chalk.red("OOPS!! This word is not available in the dictionary !!!"));
            }
        }
        
    }

    displayWOD(dict){
        console.log(chalk.cyan.bold("WORD OF THE DAY => ", dict.word.toUpperCase()));
        console.log(chalk.green("Definition => ", dict.definition.toUpperCase()));
        console.log(chalk.blue("Synonyms => ", dict.syn[0].synonyms.toUpperCase()));
        console.log(chalk.whiteBright("Antonyms => ", dict.ant[0].antonyms.toUpperCase()));
    }

    displayDict(dict){
        console.log(chalk.cyan.bold("WORD => ", dict.word.toUpperCase()));
        console.log(chalk.green("Definition => ", dict.definition.toUpperCase()));
        console.log(chalk.blue("Synonyms => ", dict.syn[0].synonyms.toUpperCase()));
        console.log(chalk.whiteBright("Antonyms => ", dict.ant[0].antonyms.toUpperCase()));
    }

}

module.exports = WordOfTheDay;