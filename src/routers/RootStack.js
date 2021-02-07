import React from 'react'
// Screens
import Home from '../pages/Home'
//ROUTES
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const RootStack = () => {

    return (
        <Stack.Navigator
            initialRouteName="AnimatedSplash"
            screenOptions={{ gestureEnabled: false, headerShown: false }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
            />  
        
        </Stack.Navigator>
    )
}

export default RootStack