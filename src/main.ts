import { chamander } from './bases/03-class';
import './style.css';






const app = document.querySelector<HTMLDListElement>('#app')!;


app.innerHTML = `
  <h1> Hello ${ chamander.name } ${ chamander.id }!!!<h1> 
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`




