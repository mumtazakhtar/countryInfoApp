const jsonReaderModule = require('./appmodule.js');
var countryname = process.argv[2];

var filename = './countries.json';

jsonReaderModule.jsonFileReader(filename, function(parse) {

	for(let i=0; i<parse.length; i++){
		if(countryname === parse[i].name){

			console.log("country: "+ parse[i].name);
			console.log("Top level domain: " + parse[i].topLevelDomain);
			console.log("capital: " + parse[i].capital)

		}
	}
})
