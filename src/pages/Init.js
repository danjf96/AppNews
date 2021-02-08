import React, { Component } from 'react'
import { Image } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Container from '../components/Container'
import { LOGO } from '../assets/styles'
const InitScreen = (props) => {

    const endAnimated = async () => {
        props.navigation.navigate('AppNews')
    }
    console.log(props)
    return(                 
        <Container style={{ backgroundColor: 'white'}}>
            
            <Animatable.View  animation="zoomIn" duration={1500} 
                style={{flex:1, width:'100%', flexDirection:"row", justifyContent:'center', alignItems:'center', backgroundColor: 'transparent' }}
                onAnimationEnd={endAnimated}
                useNativeDriver={true}
            >
                <Image source={LOGO} style={{ width: '60%', height: '100%', resizeMode: 'contain' }}/>
            </Animatable.View>

        </Container>
    )
    
}

export default InitScreen