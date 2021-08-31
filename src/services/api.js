global.fetch = require('node-fetch')
const Pokemon = require('../models/pokemon')

//consts
const URL_BASE = 'https://pokeapi.co/api/v2'
const POKEMONS_BY_PAGE = 20

async function getEvolutionOf(pokemon = ''){
    if(!pokemon) return null
    const url_path = `${URL_BASE}/pokemon-species/${pokemon}`.toLocaleLowerCase()
    const response = await fetch(url_path)
    const data = response.status == 200 ? await response.json() : null
    return data && data["evolves_from_species"] ? data["evolves_from_species"]["name"] : null
}

module.exports = {
    async searchPokemons(page = 1){
        const url_path = `${URL_BASE}/pokemon/?offset=${((POKEMONS_BY_PAGE * page) - POKEMONS_BY_PAGE)}&limit=${POKEMONS_BY_PAGE}`.toLocaleLowerCase()
        const response = await fetch(url_path)
        const data = response.status == 200 ? await response.json() : undefined
        return (data && data["results"]) ? data["results"] : []
    },
    async getPokemon(pokemon = ''){
        // if(!pokemon) throw "No pokemon was passed!"
        if(!pokemon) return null
        const url_path = `${URL_BASE}/pokemon/${pokemon}`.toLocaleLowerCase()
        const response = await fetch(url_path)
        const data = response.status == 200 ? await response.json() : null
        return data ? (await Pokemon(data)) : null
    },
    async getEvolvesFromSpecies(pokemon = ''){
        if(!pokemon) return null
        let evolutions = []
        let pokemonEvolutionOf = pokemon
        while(pokemonEvolutionOf){
            pokemonEvolutionOf = await getEvolutionOf(pokemonEvolutionOf)
            if(pokemonEvolutionOf) evolutions.push(pokemonEvolutionOf.toLocaleLowerCase())
        }
        return evolutions
    }
}