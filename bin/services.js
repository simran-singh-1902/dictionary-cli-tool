const DictionaryLogics = require('../src/utils')
const Definition = require("../src/def");
const Synonyms = require("../src/syn");
const Antonyms = require("../src/ant");
const Example = require("../src/ex");
const WordOfTheDay = require("../src/word-of-the-day");
const Play = require("../src/play");
class Services{
    cmd = ["--def", "--syn", "--ant", "--ex", "--play", "--help", "--version"];

    constructor(){
        this.utils = new DictionaryLogics();
        
    }

    cmdActions(process) {

        if(process.argv.length == 2) {  
            this.wod = new WordOfTheDay();
            this.wod.run();

        } else if(process.argv.length == 3) {
            
            if(process.argv[2] == this.cmd[4]){
                this.play = new Play();
                this.play.run();
            }
            else {
                var word = process.argv[2];
                this.dict = new WordOfTheDay();
                this.dict.run(word);
            }

        } else if(process.argv.length == 4 && this.cmd.includes(process.argv[2])) {

            //do the operation according to process.argv[2]
            var word = process.argv[3];
            if(process.argv[2] == this.cmd[0]) { 
                this.def = new Definition();
                this.def.run(word);

            } else if(process.argv[2] == this.cmd[1]) {
                this.syn = new Synonyms();
                this.syn.run(word);

            } else if(process.argv[2] == this.cmd[2]) {
                this.ant = new Antonyms();
                this.ant.run(word);

            } else if(process.argv[2] == this.cmd[3]) {
                this.ex = new Example();
                this.ex.run(word);

            } else {
                this.utils.showHelp(); 
            }
    
        } else {
                this.utils.showHelp();  
        }
    }
}

module.exports = Services;

