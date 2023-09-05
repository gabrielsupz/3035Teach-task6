import { PokemonListSection } from './components/PokemonListSection'

import pokePhone from './assets/pokePhone.png'

function App() {
  return (
    <>
      <h1>
        Pokemons <img src={pokePhone} alt="" />
      </h1>
      <PokemonListSection />
    </>
  )
}

export default App
