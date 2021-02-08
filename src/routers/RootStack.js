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
            screenOptions={{ gestureEnabled: false, headerShown: true }}
        >
            <Stack.Screen
                name="AppNews"
                component={Home}
            />  
        
        </Stack.Navigator>
    )
}

export default RootStack