import React from 'react'
// Screens
import InitScreen  from '../pages/Init'
import HomeScreen from '../pages/Home'
//ROUTES
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const RootStack = () => {

    return (
        <Stack.Navigator
            initialRouteName="Init"
            screenOptions={{ gestureEnabled: false, headerShown: true }}
        >
            <Stack.Screen
                name="Init"
                options={{ headerShown: false }}
                component={InitScreen}
            />  

            <Stack.Screen
                name="AppNews"
                options={{ headerLeft: null }}
                component={HomeScreen}
            />  
        
        </Stack.Navigator>
    )
}

export default RootStack