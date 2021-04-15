const mongoose = require('mongoose');

// Total 5 Schemas for this project

//1. Definitions of words
const defSchema = new mongoose.Schema({
    word: {type: String, index: true, required: true},
    definition: {type: String},
});
const Definition = new mongoose.model('Definition', defSchema);
module.exports.Definition = Definition;

//2. Synonyms of words
const synSchema = new mongoose.Schema({
    word: {type: String, index: true, required: true},
    synonyms: {type: String},
});
const Synonyms = new mongoose.model('Synonyms', synSchema);
module.exports.Synonyms = Synonyms;

//3. Antonyms of words

//4. examples of words

//5. Hints for words
