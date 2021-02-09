import React from 'react'
import { View } from 'react-native'
import STYLES from '../assets/styles'

const Container = (props) => {
    return (
        <View style={STYLES(props.style).container}>
            {props.children}
        </View>
    )
}

export default Container