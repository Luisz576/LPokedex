import React from 'react'
import { Text, View } from 'react-native'
import utils from '../styles/utils'

export default function PokemonType({ type }){
    return (<View style={{ maxWidth: '45%', backgroundColor: `${utils.getColorFromType(type)}`, paddingVertical: 5, borderRadius: 20 }}>
        <Text style={{ fontWeight: '700', alignSelf: "center", fontSize: 16, color: "#fff" }}>{type.toUpperCase()}</Text>
    </View>)
}