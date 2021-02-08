import React, { useEffect } from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import STYLES from '../assets/styles'
import Categories from '../components/Categories'
import Container from '../components/Container'
import ListNews from '../components/ListNews'
import ModalArticle from '../components/ModalArticle'
import { getNews } from '../store/ducks/news'
import { LOGO } from '../assets/styles'

const Home = () => {
    const dispatch = useDispatch()
    const { news } = useSelector( ({ news }) => ({ news }))

    useEffect(() => {
        dispatch(getNews(news.selectedCategory))
    }, [])
    
    return (
        <Container>
            <View style={{ width: '100%'}}>
                <Text style={STYLES().h1}>Categories:</Text>
                <Categories />
            </View>            
            
            <Text style={STYLES().h1}> News: </Text>

            {news.loading
                ? <ActivityIndicator color={'black'} size={'large'}/>
                : <ListNews />
            }
            
            <ModalArticle />
        </Container>
    )
}

export default Home