import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import STYLES from '../assets/styles'
import { getNews, setCategory } from '../store/ducks/news'

const Categories = () => {
    const dispatch = useDispatch()
    const { news } = useSelector( ({ news }) => ({ news }))
    
    const renderItem = ({ item, index }) => {
        var customStyle = { marginLeft: index == 0 ? 0 : 8 }
        if(item == news.selectedCategory) customStyle = { ...customStyle, backgroundColor: 'blue', borderColor: 'white'}

        return (
            <TouchableOpacity style={STYLES(customStyle).categorieButton}  onPress={() => select(item)}>
                <Text style={STYLES(item == news.selectedCategory && {color: 'white'} ).categoryText}>{item}</Text>
            </TouchableOpacity>
        )
    }

    const select = (category) => {
        dispatch(setCategory(category))
        dispatch(getNews(category))
    }

    return (
        <View style={{ width:'100%' }}>
            <FlatList 
                data={news.categories || []}
                renderItem={renderItem}
                horizontal={true}
                keyExtractor={ (item,index) => 'category'+index}
            />
        </View>

    )
}

export default Categories