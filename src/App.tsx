import { PokemonListSection } from './components/PokemonListSection'
import './styles/App.css'
import pokePhone from './assets/pokePhone.png'

function App() {
  return (
    <>
      <h1>
        Pokemons - Pokédex <img src={pokePhone} alt="" />
      </h1>
      <PokemonListSection />
    </>
  )
}

export default App
