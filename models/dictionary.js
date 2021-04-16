const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

class Dictionary {

    constructor(){
        this.db = mongoose.connect('mongodb://localhost:27017/dictionary-app',{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true  });
    }

    createSchemas(){

        //1. Definitions of words
        const defSchema = new mongoose.Schema({
            word: {type: String, index: true, required: true},
            definition: {type: String},
        });
        var Definition = new mongoose.model('Definition', defSchema);

        //2. Synonyms of words
        const synSchema = new mongoose.Schema({
            word: {type: String, index: true, required: true},
            synonyms: {type: String},
        });
        var Synonyms = new mongoose.model('Synonyms', synSchema);

        //3. Antonyms of words
        const antSchema = new mongoose.Schema({
            word: {type: String, index: true, required: true},
            antonyms: {type: String},
        });
        var Antonyms = new mongoose.model('Antonyms', synSchema);

        //4. examples of words
        const exSchema = new mongoose.Schema({
            word: {type: String, index: true, required: true},
            example: {type: String},
        });
        var Example = new mongoose.model('Example', exSchema);

        //5. Hints for words
        const hintSchema = new mongoose.Schema({
            word: {type: String, index: true, required: true},
            hints: {type: String},
        });
        var Hints = new mongoose.model('Hints', hintSchema);

        return { Definition, Synonyms, Antonyms, Example, Hints};
    }


}

module.exports = Dictionary;
