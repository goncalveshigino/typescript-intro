import { charmander } from './bases/04-injecao';
import './style.css';






const app = document.querySelector<HTMLDListElement>('#app')!;


app.innerHTML = `
  <h1> Hello ${ charmander.name } ${ charmander.id }!!!<h1> 
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`




