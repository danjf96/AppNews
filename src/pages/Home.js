import React from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../components/Categories'
import Container from '../components/Container'

const Home = () => {
    const dispatch = useDispatch()
    const { news } = useSelector( ({ news }) => ({ news }))
    console.log('AQUI', news)
    return (
        <Container>
            <Categories />
        </Container>
    )
}

export default Home