const Dictionary = require("../models/dictionary");
const Play = require("./play");
const chalk = require('chalk')

class DictionaryLogics {

    constructor() {
        this.play = new Play();
    }

    async wordInDictionary(word) {
        this.db = new Dictionary();
        this.data = this.db.createSchemas();
        var exist = false;
        await this.data.Definition.distinct('word').then(words =>
            {
                if (words.includes(word)){
                    exist = true;
                } 
                else {
                    exist = false;
                }
            });
        return exist;
    }

    async getDefinition(word) {
        
        let inDict = await this.wordInDictionary(word);
        var def;  
        if (inDict) {
            await this.data.Definition.find({word: word}).then(word => {
                    def = word[0].definition; 
            });
        }   
        return def;              
    }

    async getSynonyms(word) {

        let inDict = await this.wordInDictionary(word);
        var syn;  
        if (inDict) {
            await this.data.Synonyms.find({word: word}).then(word => {
                    syn = word[0].synonyms; 
            });
        }   
        return syn; 
    }

    getAntonyms(word) {
        if (this.wordInDictionary(word)) {
            this.data.Antonyms.find({
                word: word
            }, (err, word) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(chalk.green("Antonyms => ", word[0].antonyms));
                }
            });
        }
    }

    getExample(word) {
        if (this.wordInDictionary(word)) {
            this.data.Example.find({
                word: word
            }, (err, word) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(chalk.green("Example => ", word[0].example));
                }
            });
        }
    }

    wordOfTheDay() {
        this.data.Definition.distinct('word', (err, words) => {
            if (err) {
                console.log(err);
            } else {
                var wod = this.chooseRandom(words);
                console.log(chalk.blue.bold("WORD OF THE DAY = ", wod.toUpperCase()));
                this.getDefinition(wod);
                this.getSynonyms(wod);
            }
        });
    }

    allOfGivenWord(word){
        if (this.wordInDictionary(word)) {
            console.log(chalk.blue.bold("WORD = ", word.toUpperCase()));
            this.getDefinition(word);
            this.getSynonyms(word);
        }
    }

    startGame(){
        this.data.Definition.distinct('word', (err, words) => {
            if (err) {
                console.log(err);
            } else {
                var answer = this.chooseRandom(words);
                var synOrAnt = this.chooseRandom(['Synonyms','Antonyms']);
                this.getDefinition(answer);
                if(synOrAnt == "Synonyms"){
                    
                } else {
                    var antonyms = str.split(',');
                }  
                this.play.askQuestion(answer);              
            }
        });
    }

    chooseRandom(array) {
        return array[Math.floor(Math.random() * array.length)]
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