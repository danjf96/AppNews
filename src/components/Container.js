import React from 'react'
import { View } from 'react-native'

const Container = (props) => {
    return (
        <View style={{ flex: 1, width:'100%', padding: 12}}>
            {props.children}
        </View>
    )
}

export default Container