import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import Play from '../Screens/Play';
import Score from '../Screens/Score';

const Stack = createStackNavigator();

const StackNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName = 'Home' screenOptions = {{headerShown: false}}>
            <Stack.Screen name = 'Home' component = {TabNavigator} />
            <Stack.Screen name = 'PlayScreen' component = {Play} />
            <Stack.Screen name = 'ScoreScreen' component = {Score} />
        </Stack.Navigator>
    );
}

export default StackNavigator;