import React from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch()
    const { news } = useSelector( ({ news }) => ({ news }))
    console.log('AQUI', news)
    return (
        <View>
            <Text>Home!</Text>
        </View>
    )
}

export default Home