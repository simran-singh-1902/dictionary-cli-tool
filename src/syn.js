const DictionaryLogics = require("./utils");
const chalk = require("chalk");
class Synonyms{

    constructor(){
        this.retrieve = new DictionaryLogics();
    }

    async run(word){
        var syn = await this.retrieve.getSynonyms(word);
        this.display(word, syn);   
    }

    display(word, syn){
        if(syn !== undefined){
            console.log(chalk.green("Synonyms of '" + word.toUpperCase() + "' => ", syn));
        } else {
            console.log(chalk.red("OOPS!! This word is not available in the dictionary !!!"));
        }
    }

    runSyn(word){
        var syn = this.retrieve.getSynonyms(word);
        console.log(chalk.green("Synonyms => ", syn));
    }

}

module.exports = Synonyms;