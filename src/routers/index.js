
import React, { useEffect, useRef } from 'react'
import {  BackHandler, StatusBar, Keyboard, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native' //

import RootStack from './RootStack'

const rotasParaFechaApp = ['AppNews','Init']
const rotasRotaDesativaBack = ['AppNews']
const Rotas = () => {
    const nav = useRef(null);

    useEffect( () => {
       
        const backAction = () => {
            
            if(nav.current) {
                
                const rotaAtual = nav.current.getCurrentRoute()
    
                if (rotasParaFechaApp.includes(rotaAtual.name)) {
                    BackHandler.exitApp()
                    return false
                } else if (rotasRotaDesativaBack.includes(rotaAtual.name)){
                    return true
                }
            } 
            
            nav.current.goBack()
            
            return true;
        };
    
        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    
        return () => backHandler.remove();
    },[])

    const getActiveRouteName = (navigation) =>  {
        if (!navigation) {
            return null
        }

        const route = navigation.routes[navigation.index]

        if (route.routes) {
            return this.getActiveRouteName(route)
        }
        return route.routeName    
    }
   
    return (
        <React.Fragment>
            <StatusBar backgroundColor={'black'} />
            <NavigationContainer ref={nav}
                onStateChange={( navigation, route) => {
                    //console.log(navigation, route)
                    let prevScreen = getActiveRouteName(navigation)
                    let currentScreen = getActiveRouteName(route)
                    if (prevScreen !== currentScreen) Keyboard.dismiss()                        
            }}>
                <SafeAreaView style={{ flex: 1}}>
                    <RootStack />
                </SafeAreaView>
                
            </NavigationContainer>
        </React.Fragment>
    )
}
export default Rotas
