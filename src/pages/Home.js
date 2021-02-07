import React, { useEffect } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../components/Categories'
import Container from '../components/Container'
import ListNews from '../components/ListNews'
import { getNews } from '../store/ducks/news'

const Home = () => {
    const dispatch = useDispatch()
    const { news } = useSelector( ({ news }) => ({ news }))

    useEffect(() => {
        dispatch(getNews(news.selectedCategory))
    }, [])

    console.log('ATT', news)
    
    return (
        <Container>
            
            <Categories />
            
            <Text style={{ fontSize: 25, fontWeight:'bold',textAlign: 'left', marginVertical: 15, width:'100%' }}> News: </Text>

            {news.loading
                ? <ActivityIndicator color={'blue'} size={'large'}/>
                : <ListNews />
            }
            
        </Container>
    )
}

export default Home