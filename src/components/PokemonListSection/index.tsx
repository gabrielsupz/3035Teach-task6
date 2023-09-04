import { useEffect, useState } from 'react'
import * as S from './style'
interface PokemonProps {
  name: string
  url: string
}

export function PokemonListSection() {
  const [pokemons, setPokemons] = useState([{} as PokemonProps])

  const turnFirstLetterToUpperCase = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  async function getPokemons() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')

    const data = await response.json()

    const pokemonsArray: PokemonProps[] = []

    for (let i = 0; i < 20; i++) {
      const pokemonResponse = await fetch(data.results[i].url)
      const pokemonData = await pokemonResponse.json()
      console.log(pokemonData)

      const pokemon: PokemonProps = {
        name: turnFirstLetterToUpperCase(data.results[i].name),
        url: pokemonData.sprites.front_default
      }

      pokemonsArray.push(pokemon)
    }

    setPokemons(pokemonsArray)
  }

  useEffect(() => {
    getPokemons()
  }, [])
  return (
    <S.SectionStyled>
      {pokemons.map((poke: PokemonProps, index) => (
        <S.PokeBox key={index}>
          <h2>{poke.name}</h2>
          <img src={poke.url} alt={`Imagem do pokemon ${poke.name}`} />
        </S.PokeBox>
      ))}
    </S.SectionStyled>
  )
}
