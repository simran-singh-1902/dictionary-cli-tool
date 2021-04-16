const DictionaryLogics = require('../src/utils')

class Services{
    cmd = ["--def", "--syn", "--ant", "--ex", "--play", "--help", "--version"];

    constructor(){
        this.utils = new DictionaryLogics();
    }

    callingLogics(process, yargs) {
        
        if(process.argv.length == 2) {

            console.log("word of the day -Random Word");
            
        } else if(process.argv.length == 3 && !this.cmd.includes(process.argv[2])) {

            if(process.argv[2] == this.cmd[4]){

                console.log('Play the Game!', word);

            }
            else {

                var word = process.argv[2];
                console.log('everything about this word', word);
            }
        } else if(process.argv.length == 4 && this.cmd.includes(process.argv[2])) {
            //do the operation according to process.argv[2]
            var word = process.argv[3];
            if(process.argv[2] == this.cmd[0]) { 

                this.utils.getDefinition(word);

            } else if(process.argv[2] == this.cmd[1]) {

                this.utils.getSynonyms(word);

            } else if(process.argv[2] == this.cmd[2]) {

                this.utils.getAntonyms(word);

            } else if(process.argv[2] == this.cmd[3]) {

                this.utils.getExample(word);

            }
        } else {

                this.utils.showHelp();  
        }
    }
}

module.exports = Services;

