import { searchedPokemon } from './searchPokemon'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <input id="searchInput" />
    <button id="buttonSearch">Search pokemon</button>
    <div style={background-color:'acqua'}>
      <p id="pokemonName"></p>
    </div>
  </div>
`

// blablabla

searchedPokemon(document.querySelector<HTMLButtonElement>('#pokemonName')!)
