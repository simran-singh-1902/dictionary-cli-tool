const mongoose = require('mongoose');

// Total 5 Schemas for this project

//1. Definitions of words
const defSchema = mongoose.Schema({
    word: {type: String},
    definition: {type: String},
});

//2. Synonyms of words

//3. Antonyms of words

//4. examples of words

//5. Hints for words

module.exports = mongoose.model('Dictionary', dictSchema);
