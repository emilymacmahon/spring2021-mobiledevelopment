/* 

creating a class named fetch in a file called fetch... giving constructor methof two parameters
(pokemon and color) and values will be saved as properties of the class. fetch method created to request info
from poke API and if a valid pokemon or ID number is passed, the name of pokemon will be shown

*/

import axios from 'axios';
import chalk from 'chalk';

class Fetch {

    constructor(pokemon, color) {
      this.pokemon = pokemon;
      this.color = color;
    }
  
    fetch (){

        axios('https://pokeapi.co/api/v2/pokemon/' + this.pokemon)

        // And then...
    .then(  (response) => {
        // Use the 'data'
        const pokemon = response.data;

        // In this example, the above URL will return an object
        //  with data on the Pokemon requested
        console.log(chalk.hex(this.color)( "This is a " + pokemon.name + " and its ID is " + pokemon.id));
    })
    .catch(function (error) {
        // handle error
        console.log(chalk.red("Error: " + error));
    });

    }
  
  }



  export default Fetch;
