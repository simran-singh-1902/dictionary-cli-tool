const Dictionary = require("../models/dictionary");
const Play = require("./play");
const chalk = require('chalk')

class DictionaryLogics {

    constructor() {
        this.db = new Dictionary();
        this.data = this.db.createSchemas();
        this.play = new Play();
    }

    wordInDictionary(word) {
        this.data.Definition.distinct('word', (err, words) => {
            if (err) {
                console.log(err);
            } else {
                if (words.includes(word)) return true;
                else {
                    console.log(chalk.red("OOPS!! This word is not available in the dictionary !!!"));
                    return;
                }
            }
        });
    }

    getDefinition(word) {
        if (this.wordInDictionary(word)) {
            this.data.Definition.find({
                word: word
            }, (err, word) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(chalk.green("Definition of '" + word[0].word.toUpperCase() + "' => ", word[0].definition));
                }
            });
        }
    }

    getSynonyms(word) {
        if (this.wordInDictionary(word)) {
            this.data.Synonyms.find({
                word: word
            }, (err, word) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(chalk.green("Synonyms of '" + word[0].word.toUpperCase() + "' => ", word[0].synonyms));
                }
            });
        }
    }

    getAntonyms(word) {
        if (this.wordInDictionary(word)) {
            this.data.Antonyms.find({
                word: word
            }, (err, word) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(chalk.green("Antonyms of '" + word[0].word.toUpperCase() + "' => ", word[0].antonyms));
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
                    console.log(chalk.green("Example of '" + word[0].word.toUpperCase() + "' => ", word[0].example));
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
                    this.getSynonyms(answer);
                } else {
                    this.getAntonyms(answer);
                }  
            this.play.askQuestion(word);              
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