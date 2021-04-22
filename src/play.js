const DictionaryLogics = require("./utils");
const chalk = require('chalk')
const inquirer = require('inquirer')

class Play {

    constructor() {
        this.retrieve = new DictionaryLogics();
    }
    async run() {
        var word = await this.retrieve.getWordOfTheDay();
        var dict = await this.retrieve.getDictionary(word);
        var synORant = await this.synonymsORantonyms(dict);
        this.displayQuestion(dict, dict[0].definition, synORant.selectedSyn, synORant.selectedAnt);
    }

    async synonymsORantonyms(dict) {
        var synOrAnt = await this.retrieve.chooseRandom(["Antonyms", "Synonyms"]);
        if (synOrAnt == "Synonyms") {
            var syn = this.getSynArray(dict);
            var selectedSyn = await this.retrieve.chooseRandom(syn);
        } else {
            var ant = this.getAntArray(dict);
            var selectedAnt = await this.retrieve.chooseRandom(ant);
        }
        return {
            selectedSyn,
            selectedAnt
        };
    }

    getSynArray(dict) {
        var synArr = dict[0].syn[0].synonyms;
        synArr = synArr.split(/\s*,\s*/);
        return synArr;
    }

    getAntArray(dict) {
        var antArr = dict[0].ant[0].antonyms;
        antArr = antArr.split(/\s*,\s*/);
        return antArr;
    }

    displayQuestion(dict, def, syn, ant) {
        if (def !== undefined) {
            console.log(chalk.cyanBright("Definition of word => ", def));
        }
        if (syn !== undefined) {
            console.log(chalk.yellow("Synonym of the word => ", syn));
        } else if (ant !== undefined) {
            console.log(chalk.yellow("Antonym of the word => ", ant));
        }
        this.askQuestion(dict);

    }
    async askQuestion(dict) {
        var response = await inquirer.prompt([{
            name: "reply",
            type: "input",
            message: "GUESS THE WORD (Based on information given above, guess the word)"
        }]);
        var reply = response.reply;
        var synArr = this.getSynArray(dict);
        if (reply == dict[0].word || synArr.includes(reply)) {
            console.log(chalk.greenBright.bold("Congratulations! You got it right!!!"));
        } else {
            var response = await inquirer.prompt([{
                name: 'option',
                message: 'select an option',
                type: 'list',
                choices: [{
                    name: '1. try again'
                }, {
                    name: '2. hint'
                }, {
                    name: '3. quit'
                }],
            }]);
            var option = response.option;
            this.seeNewOptions(option, dict);
        }
    }

    async seeNewOptions(option, dict) {
        switch (option) {
            case '1. try again':
                this.askQuestion(dict);
                break;

            case '2. hint':
                var nextHint = await this.retrieve.chooseRandom(["synORant", "Shuffled"]);
                console.log(chalk.yellow("Here's another hint for you =>"));
                if (nextHint == "Shuffled") {
                    console.log(chalk.yellow("shuffled word => " + await this.shuffleWord(dict[0].word)));
                    this.askQuestion(dict);

                } else {
                    var synORant = await this.synonymsORantonyms(dict);

                    await this.displayQuestion(dict, undefined, synORant.selectedSyn, synORant.selectedAnt);
                }
                break;

            case '3. quit':
                console.log('\n');
                console.log(chalk.yellow('Word is ', chalk.green(dict[0].word.toUpperCase()), '\n'));
                console.log(chalk.green.bold("Thanks for playing!!!"));
                break;

        }
    }

    shuffleWord(s) {
        var arr = s.split('');
        arr.sort(function () {
            return 0.5 - Math.random();
        });
        var sword = arr.join('');
        if (sword !== s) return sword;
        else this.shuffleWord(sword);
    }

}

module.exports = Play;