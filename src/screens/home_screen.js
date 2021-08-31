import React, { useState, useEffect } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import PokemonItem from '../components/pokemon_item'
import styles from '../styles/global_styles'

export default function HomeScreen({ navigation }){
    const [pokemons, setPokemons] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    // const [pokemonsFiltered, setFilter] = useState([])

    async function nextPagePokemons(){
        const morePokemons = await api.searchPokemons(page)
        setPokemons([...pokemons, ...morePokemons])
        setPage(page + 1)
        if(morePokemons.length <= 0) setHasMore(false)
    }

    useEffect(() => {
        nextPagePokemons()
    }, [])

    //Criação de filtros na pesquisa
    // useEffect(() => {
    //     const pokemonsFilteredT = []
    //     pokemons.forEach((poke) => {
    //         if(poke.name.includes('z')) //Filtros
    //             pokemonsFilteredT.push(poke)
    //     })
    //     setFilter(pokemonsFilteredT)
    // }, [pokemons])

    return (<View>
        <FlatList
            // data={pokemonsFiltered}
            data={pokemons}
            style={{ width: '100%' }}
            renderItem={({item}) => (<View style={{ marginVertical: 5, alignSelf: 'center' }}><PokemonItem navigation={navigation} pokemonData={item}/></View>)}
            keyExtractor={item => item.name}
            onEndReached={() => {
                if(hasMore) nextPagePokemons()
            }}
            onEndReachedThreshold={0.1}
            ListFooterComponent={() => {
                return hasMore ? <ActivityIndicator style={styles.loading_indicator} color="#000"/> : <></>
            }}
        />
    </View>)
}