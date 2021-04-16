const Dictionary = require("../models/dictionary");
const Definition = require("./def.js");
const Synonyms = require("./syn.js");
const chalk = require('chalk')

class DictionaryLogics{
    
    constructor(){
        this.db = new Dictionary();
        this.def = new Definition();
        this.syn = new Synonyms();
        this.data = this.db.createSchemas();
    }

    getDefinition(word){
        this.data.Definition.find({word: word }, (err, word) => {
            if (err) {
                console.log(err);
            } else {
                if(word[0] !== undefined){
                    this.def.displayDefinition(word[0].definition);
                } else{
                        console.log(chalk.red("OOPS!! This word is not available in the dictionary"));
                }
            }
        });
    }

    getSynonyms(word){
        console.log("UTILS", this.data);
        this.data.Synonyms.find({word: word }, (err, word) => {
            if (err) {
                console.log(err);
            } else {
                if(word[0] !== undefined){
                    this.syn.displaySynonyms(word[0].synonyms);
                } else{
                        console.log(chalk.red("OOPS!! This word is not available in the dictionary"));
                }
            }
        });
    }

    getAntonyms(word){
        console.log("UTILS", this.data);
        this.data.Antonyms.find({word: word }, (err, word) => {
            if (err) {
                console.log(err);
            } else {
                if(word[0] !== undefined){
                    this.def.displayAntonyms(word[0].antonyms);
                } else{
                        console.log(chalk.red("OOPS!! This word is not available in the dictionary"));
                }
            }
        });
    }

    getExample(word){
        console.log("UTILS", this.data);
        this.data.Example.find({word: word }, (err, word) => {
            if (err) {
                console.log(err);
            } else {
                if(word[0] !== undefined){
                    this.def.displayExample(word[0].example);
                } else{
                        console.log(chalk.red("OOPS!! This word is not available in the dictionary"));
                }
            }
        });
    }


    showHelp() {    
        const usage = "\nUsage: dict <option> word";
        console.log(usage);  
        console.log('\nOptions:\r')  
        console.log('\t--version\t      ' + 'Show version number.' + '\t\t\t' + '[boolean]\r')  
        console.log('    -def, --definition\t' + '      ' + 'Meaning of the given word.' + '\t\t' + '[String]\r')
        console.log('    -syn, --synonyms\t' + '      ' + 'Synonyms of the given word.' + '\t\t' + '[String]\r')
        console.log('    -ant, --antonyms\t' + '      ' + 'Antonyms of the given word.' + '\t\t' + '[String]\r')
        console.log('    -ex, --examples\t' + '      ' + 'Examples of the given word.' + '\t\t' + '[String]\r')  
        console.log('    -play, --playGame\t' + '      ' + 'Play the game!' + '\t\t\t\t' + '[String]\r')  
        console.log('\t--help\t\t      ' + 'Show help.' + '\t\t\t\t' + '[boolean]\n')  
    }
}

module.exports = DictionaryLogics;


