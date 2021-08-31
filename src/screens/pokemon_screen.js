import React, { useState, useEffect } from 'react'
import { View, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import PokemonType from '../components/pokemon_type'
import styles from '../styles/global_styles'
import utils from '../styles/utils'

export default function PokemonScreen({ route, navigation }){
    const [pokemonsEvolueOf, setPokemonsEvolueOf] = useState([])
    const pokemon = route["params"]["pokemon"]

    useEffect(() => {
        async function loadPokemonEvolues(evoluesOf){
            const pokesEvoluesOf = [];
            evoluesOf.forEach(async (evolueOf) => {
                pokesEvoluesOf.push(await api.getPokemon(evolueOf))
                if(pokesEvoluesOf.length == evoluesOf.length) setPokemonsEvolueOf(pokesEvoluesOf)
            });
        }
        loadPokemonEvolues(pokemon.evoluesOf)
    }, [])

    return (<>
        <View style={styles.display_row}>
            <View style={{ flex: 1 }}>
                <Image style={{ height: 200 }} source={{ uri: pokemon.image_url }}/>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, marginVertical: 5 }}>Nome: {utils.toUpperCaseFirtsLetter(pokemon.name)}</Text>
                <Text style={{ fontSize: 16, marginVertical: 5 }}>Peso: {pokemon.weight}</Text>
                <PokemonType type={pokemon.type}/>
                { pokemon.evoluesOf.length > 0 ? (<>
                    <Text style={{ fontSize: 12, marginVertical: 5 }}>Evolui de:</Text>
                    { pokemonsEvolueOf.length > 0 ? (<View style={[styles.display_row, { flex: 1, padding: 0, margin: 0, }]}>
                        { pokemonsEvolueOf.map(poke => <PokemonEvoluesOfSlot key={poke.name} navigation={navigation} pokemon={poke}/>) }
                    </View>) : <ActivityIndicator style={styles.loading_indicator} color="#000"/> }
                </>) : (<Text style={{ fontSize: 12, marginVertical: 5 }}>Não é uma evolução!</Text>) }
            </View>
        </View>
    </>)
}

function PokemonEvoluesOfSlot({ navigation, pokemon }){
    function handlePress(){
        navigation.pop()
        if(pokemon) navigation.navigate('Pokemon', { pokemon: pokemon })
    }

    return (<TouchableOpacity style={{ flex: 1 }} onPress={handlePress}>
        <Image style={{ height: '100%', width: '100%', resizeMode: "cover" }} source={{ uri: pokemon.image_url }}/>
    </TouchableOpacity>)
}