import axios from "axios";


export default async function createCard(pokemonNameID) {
    var cardObj = {};
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNameID}`);
    const data = response.data;

    // storing required variables
    cardObj.name = data.name;
    cardObj.type = [];
    cardObj.moves = [];
    cardObj.health = data.stats[0].base_stat? data.stats[0].base_stat:0;
    cardObj.image = data.sprites.other[`official-artwork`][`front_default`];

    // type is stored within an array :D gotta look for the indices
    for (let i = 0; i < data.types.length; i++ ) {
        cardObj.type.push(data.types[i].type.name);
    }

    if (cardObj.type.length == 0) {
        cardObj.type.push('normal');

    }
    //randomly select 2 moves
    var move1index = Math.floor(Math.random()*data.moves.length);
    var move2index = Math.floor(Math.random()*data.moves.length);

    //array of moves
    //move urls!
    var moveUrl1 = data.moves[move1index].move.url;
    var moveUrl2 = data.moves[move2index].move.url;
    var tempMovesArray = [moveUrl1, moveUrl2];

    //moves query
    for (let i = 0; i < tempMovesArray.length; i++) {
        let movesResponse = await axios.get(tempMovesArray[i]);
        const movesData = movesResponse.data;

        var movesObject = {
            //single line if statement
            /*
            if(movesData.power == ("something true")){
                return movesData.power
            }
            else{
                return 0;
            }
            */
            power: movesData.power? movesData.power:0,
            name: movesData.name,
            type: movesData.type.name,
            description: movesData.flavor_text_entries&&movesData.flavor_text_entries[0]? movesData.flavor_text_entries[0].flavor_text:''

        };

        cardObj.moves.push(movesObject);
    }
    

    //species query
    const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonNameID}`);
    const specialData = speciesResponse.data;

    cardObj.flavorText = specialData.flavor_text_entries&&specialData.flavor_text_entries[0]? specialData.flavor_text_entries[0].flavor_text:'';
    
    return cardObj;
};
