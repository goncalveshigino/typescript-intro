 

 export let name: string  = 'Higino';
 export const age: number = 25;
 export const isValid: boolean = true;


 export const templateString = ` String 
 multilinea
 que pode ter
 " doubles
 ' simples
 injectar valor ${ name }
 expresones ${ 1 + 1 }
 numeros: ${ age }
 booleanos: ${ isValid }
 `

 console.log( templateString )