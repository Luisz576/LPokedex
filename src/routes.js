import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home_screen'
import PokemonScreen from './screens/pokemon_screen'

const Stack = createNativeStackNavigator()

export default function Routes(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'LPokedex' }}/>
            <Stack.Screen name="Pokemon" component={PokemonScreen} options={{ title: 'Pokemon' }}/>
        </Stack.Navigator>
    </NavigationContainer>
}