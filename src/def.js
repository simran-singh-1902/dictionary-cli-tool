const DictionaryLogics = require("./utils.js");
const chalk = require("chalk");
class Definition{

    constructor(){
        this.retrieve = new DictionaryLogics();
    }

    async run(word){
        var def = await this.retrieve.getDefinition(word);
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

module.exports = Definition;