
/*Create a Node.js application that does the following:
- Takes in one parameter from the command line, the name of a country.
 Note: command line arguments can be read from the global array `process.argv`
- Reads and parses the `countries.json` file. Note: you must use readFile and not readFileSync.
 Get it here: countries.json.Preview the documentView in a new window
- Outputs information about that specific country. Must be in the following format:
Country: <country name>
Top Level Domain: <tld>*/


var countryname = process.argv[2];
console.log(countryname);

const fs = require('fs')


fs.readFile('countries.json', function(err,data){
	if(err){
		throw err;
	}
	var parse = JSON.parse(data);

	for(let i=0; i<parse.length; i++){


		if(countryname === parse[i].name){

			console.log("country: "+ parse[i].name);
			console.log("Top level domain: " + parse[i].topLevelDomain);
			console.log("capital: " + parse[i].capital)

		}
	}
	
})






