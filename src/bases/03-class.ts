

export class Pokemon {

    // public id: number;
    // public name: string;

    get imageUrl(): string  {
      
        return `https://pokemon.com/${ this.id }.jpg`
    }

    constructor( 
        public readonly id: number, 
        public name: string, 
    ){}


    scream(){
        console.log(`${ this.name.toUpperCase() }!!!`)
    }

    speak(){
        console.log(`${ this.name}, ${ this.name}`)
    }

}

export const chamander = new Pokemon( 3, 'Charmander' )

console.log(chamander)
chamander.scream();
chamander.speak();