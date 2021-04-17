const DictionaryLogics = require("./utils");
const chalk = require("chalk");
class Antonyms{

    constructor(){
        this.retrieve = new DictionaryLogics();
    }

    async run(word){
        var ant = await this.retrieve.getAntonyms(word);
        this.display(word, syn);   
    }

    display(word, ant){
        if(ant !== undefined){
            console.log(chalk.green("Antonyms of '" + word.toUpperCase() + "' => ", ant));
        } else {
            console.log(chalk.red("OOPS!! This word is not available in the dictionary !!!"));
        }
    }

    runAnt(word){
        var ant = this.retrieve.getAntonyms(word);
        console.log(chalk.green("Antonyms => ", syn));
    }

}

module.exports = Antonyms;