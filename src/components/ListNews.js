import moment from 'moment'
import React from 'react'
import { FlatList, TouchableOpacity, View, Text, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getNews } from '../store/ducks/news'
import { getPhotoArticle } from '../utils/functions'

const ListNews = () => {
    const dispatch = useDispatch()
    const { news } = useSelector( ({ news }) => ({ news }))
    const { list } = news

    const renderItem = ({ item, index }) => {
        const { title, byline, published_date, multimedia } = item
        const { width, height, url } = getPhotoArticle(multimedia, 'Standard Thumbnail')

        return (
            <TouchableOpacity style={{ flex: 1, flexDirection:'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 0.8, borderColor: 'gray'}} onPress={select}>
                
                <Image source={{ uri: url}} style={{ width, height, marginRight: 10, borderRadius: 8}} />
                
                <View style={{ flex: 1, flexDirection:'column', justifyContent:'space-between', height:'100%' }} >
                    <Text style={{ fontWeight: 'bold'}}>{title}</Text>
                    <Text style={{ fontSize: 12 }}>{byline} - published {moment(published_date).format('DD/MM/YYYY')}</Text>
                </View> 
                
            </TouchableOpacity>
        )
    }

    const select = () => null

    return (
        <FlatList 
            style={{ width: '100%'}}
            data={list}
            renderItem={renderItem}
            keyExtractor={ (item,index) => 'news'+index}
        /> 
    )
}

export default ListNews