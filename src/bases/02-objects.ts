

export const pokemonIds = [1,20,30,49,70];



interface Pokemon {
    id: number; 
    name: string;
    age?: number;
}


export const bulbascar: Pokemon = {
    id: 1, 
    name: 'Bulbasaur',  
    age: 2
}

export const charmander: Pokemon = {
    id: 2, 
    name: 'Charmander',  
    age: 10
}

export const pokemons: Pokemon[] = [];

pokemons.push( charmander, bulbascar )




