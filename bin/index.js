#! /usr/bin/env node
const { Command } = require("commander");
const yargs = require("yargs");
const Services = require("./services.js");
const cmd = new Services();

//defining available options
const usage = "\nUsage: dict <options> word";

yargs.usage(usage)  
      .option("def", {alias:"definition", describe: "Meanin of the given word.", type: "string", demandOption
: false }).option("syn", {alias:"synonyms", describe: "Synonmys of the given word.", type: "string", demandOption
: false }).option("ant", {alias:"antonyms", describe: "Antonyms of the given word.", type: "string", demandOption
: false }).option("ex", {alias:"examples", describe: "Examples of the given word.", type: "string", demandOption
: false }).option("play", {alias:"playGame", describe: "Play the game!", type: "none", demandOption
: false })                                                                                              
      .help(true)  
      .argv;
cmd.cmdActions(process);


