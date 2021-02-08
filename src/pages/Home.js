import React, { useEffect } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import STYLES from '../assets/styles'
import Categories from '../components/Categories'
import Container from '../components/Container'
import ListNews from '../components/ListNews'
import ModalArticle from '../components/ModalArticle'
import { getNews } from '../store/ducks/news'

const Home = () => {
    const dispatch = useDispatch()
    const { news } = useSelector( ({ news }) => ({ news }))

    useEffect(() => {
        dispatch(getNews(news.selectedCategory))
    }, [])
    
    return (
        <Container>
            
            <Categories />
            
            <Text style={STYLES().h1}> News: </Text>

            {news.loading
                ? <ActivityIndicator color={'blue'} size={'large'}/>
                : <ListNews />
            }
            
            <ModalArticle />
        </Container>
    )
}

export default Home