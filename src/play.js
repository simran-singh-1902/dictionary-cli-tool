const chalk = require('chalk')
const inquirer = require('inquirer')

class Play {

    async askQuestion(word){
        var response = await inquirer.prompt([{
                name: "reply",
                type: "input",
                message: "GUESS THE WORD (Based on information given above, guess the word)"
            }]);
        var reply = response.reply;
        if(reply == word){
            console.log(chalk.greenBright.bold("Congratulations! You got it right!!!"));
        } else {
            var response = await inquirer.prompt([{
                name: 'option',
                message: 'select an option',
                type: 'list',
                choices: [{ name: '1. try again' }, { name: '2. hint' }, { name: '3. quit' }],
              }]);
            var option = response.option;
            this.seeNewOptions(option, word);      
        }
    }

    seeNewOptions(option, word){
        switch(option){
            case '1. try again':
                this.askQuestion(word);
                break;
            case '2. hint':
                console.log(chalk.yellow("Hint 1 =>",this.shuffleWord(word)));
                this.askQuestion(word);
                break;
                
            case '3. quit':
                console.log(chalk.yellow('Word is ', chalk.green(word.toUpperCase()), '\n'))     
        }
    }

    shuffleWord(s){
        var arr = s.split('');           
        arr.sort(function() {
            return 0.5 - Math.random();
        });  
        s = arr.join('');                
        return s;   
    }

}

module.exports = Play;