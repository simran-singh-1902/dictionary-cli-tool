#! /usr/bin/env node
const utils = require('./utils.js')
const yargs = require("yargs");

//defining available options
var cmd = [ "--def", "--syn", "--ant", "--ex", "--play", "--help", "--version"];
const usage = "\nUsage: dict <options> word";
const options = yargs  
      .usage(usage)  
      .option("def", {alias:"definition", describe: "Meanin of the given word.", type: "string", demandOption
: false }).option("syn", {alias:"synonyms", describe: "Synonmys of the given word.", type: "string", demandOption
: false }).option("ant", {alias:"antonyms", describe: "Antonyms of the given word.", type: "string", demandOption
: false }).option("ex", {alias:"examples", describe: "Examples of the given word.", type: "string", demandOption
: false }).option("play", {alias:"playGame", describe: "Play the game!", type: "none", demandOption
: false })                                                                                              
      .help(true)  
      .argv;


if(process.argv.length == 1){
      //random word -> word of the day
} else if(process.argv.length == 3 && !cmd.includes(process.argv[2])){
      //everything about the given word
}else if(process.argv.length == 4 && cmd.includes(process.argv[2])){
      //do the operation according to process.argv[2]
}else{
    console.log("yargs.argv ==> ",yargs.argv, yargs.argv.def, process.argv.length, process.argv[2]);
    utils.showHelp();  
}


//Database connectivity
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = mongoose.connect('mongodb://localhost:27017/dictionary-app',{ useNewUrlParser: true,useUnifiedTopology: true  }, function (err) {
      if (err) throw err;
      console.log('Successfully connected'); 
   });


const Dictionary = require('../models/dictionary');

const getDef = (word) => {
      Dictionary.Definition.find({word: word }, (err, word) => {
          if (err) {
              console.log(err);
          } else {
              console.log(word);
          }
      });
  }
getDef("entail");
