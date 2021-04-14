#! /usr/bin/env node
const utils = require('./utils.js')
const yargs = require("yargs");

//defining available options
const usage = "\nUsage: dict <options> word";
const options = yargs  
      .usage(usage)  
      .option("def", {alias:"definition", describe: "Meaning of the given word.", type: "string", demandOption
: false }).option("syn", {alias:"synonyms", describe: "Synonmys of the given word.", type: "string", demandOption
: false }).option("ant", {alias:"antonyms", describe: "Antonyms of the given word.", type: "string", demandOption
: false }).option("ex", {alias:"examples", describe: "Examples of the given word.", type: "string", demandOption
: false }).option("play", {alias:"playGame", describe: "Play the game!", type: "none", demandOption
: false })                                                                                                 
      .help(true)  
      .argv;

//incorrect arguments
if(yargs.argv._[1] !== undefined){  
    utils.showHelp();  
    return;  
}

//Database connectivity

// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// const db = mongoose.connect('mongodb://localhost:27017/dictionary-app', {
//     useMongoClient: true
// });

// const Dictionary = require('../models/dictionary');





