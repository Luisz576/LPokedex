import React, { useEffect, useState } from "react"
import { TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native'
import utils from '../styles/utils'

export default function PokemonItem({ navigation, pokemonData }){
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        async function getPokemon(pokemonName){
            setPokemon(await api.getPokemon(pokemonName))
        }
        
        getPokemon(pokemonData.name)
    }, [])

    function handlePress(){
        if(pokemon) navigation.navigate('Pokemon', { pokemon: pokemon })
    }

    return (<>
        {pokemon != null ? (<TouchableOpacity onPress={handlePress}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{utils.toUpperCaseFirtsLetter(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.image_url }} style={{ maxWidth: 100, height: 100, resizeMode: "cover" }}/>
        </TouchableOpacity>)
        : (<ActivityIndicator color="#000" style={{ width: 100, height: 100 }}/>)}
    </>)
}