# dictionary-cli-tool
A command line interface tool for dictionary operations. 


Usage: dict <options> word

Options:

 <li> --version            Show version number                             [boolean]
 <li> --def, --definition  Meanin of the given word.                        [string]
 <li> --syn, --synonyms    Synonmys of the given word.                      [string]
 <li> --ant, --antonyms    Antonyms of the given word.                      [string]
 <li> --ex, --examples     Examples of the given word.                      [string]
 <li> --play, --playGame   Play the game!
 <li> --help               Show help                                       [boolean]

1. Word Definitions
	Display definitions of a word. 
	dict --def <word>

2. Word Synonyms
	Display synonyms of a word. 
	dict --syn <word>
  
3. Word Antonyms
	Display antonyms of a word
	dict --ant <word>

4. Word Examples
	Display examples of a word
	dict --ex <word>

5. Word Full Dict
	Display Word Definitions, Word Synonyms, Word Antonyms and Word Examples for a given word.
	dict <word>
  
6. Word of the Day Full Dict
	fetch a word and display Word full Dict.
	dict

7. Word Game
	./dict play
	The program should display a definition, a synonym or an antonym
	And ask the user to enter the word.
