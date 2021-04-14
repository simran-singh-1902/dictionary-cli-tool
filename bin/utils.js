module.exports = { showHelp: showHelp };
const usage = "\nUsage: dict <option> word";

//help 
function showHelp() {                                                            
    console.log(usage);  
    console.log('\nOptions:\r')  
    console.log('\t--version\t      ' + 'Show version number.' + '\t\t' + '[boolean]\r')  
    console.log('    -def, --definition\t' + '      ' + 'Meaning of the given word.' + '\t\t' + '[String]\r')
    console.log('    -syn, --synonyms\t' + '      ' + 'Synonyms of the given word.' + '\t\t' + '[String]\r')
    console.log('    -ant, --antonyms\t' + '      ' + 'Antonyms of the given word.' + '\t\t' + '[String]\r')
    console.log('    -ex, --examples\t' + '      ' + 'Examples of the given word.' + '\t\t' + '[String]\r')  
    console.log('    -,   --all\t' + '      ' + "\t" +'Everything about the given word.' + '\t\t' + '[String]\r')
    console.log('\t--help\t\t      ' + 'Show help.' + '\t\t\t' + '[boolean]\n')  
}

//finding definition of given word

//finding synonyms of given word

//finding antonyms of given word

//finding examples of given word

//printing all of a given word

//printing entire dictionary

// GAME !!!

