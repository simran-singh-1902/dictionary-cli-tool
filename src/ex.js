const DictionaryLogics = require("./utils");
const chalk = require("chalk");
class Example{

    constructor(){
        this.retrieve = new DictionaryLogics();
    }

    async run(word){
        var ex = await this.retrieve.getExample(word);
        this.display(word, ex);   
    }

    display(word, ex){
        if(ex !== undefined){
            console.log(chalk.green("Example of '" + word.toUpperCase() + "' => ", ex));
        } else {
            console.log(chalk.red("OOPS!! This word is not available in the dictionary !!!"));
        }
    }

    runEx(word){
        var ex = this.retrieve.getExample(word);
        console.log(chalk.green("Example => ", ex));
    }

}

module.exports = Example;