import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import STYLES from '../assets/styles'

const Categories = () => {
    const { news } = useSelector( ({ news }) => ({ news }))
    
    const renderItem = ({ item, index }) => {
        var customStyle = { marginLeft: index == 0 ? 0 : 8 }
        if(item == news.selectedCategory) customStyle = { ...customStyle, backgroundColor: 'blue', borderColor: 'white'}

        return (
            <TouchableOpacity style={STYLES(customStyle).categorieButton} key={'category'+index} onPress={select}>
                <Text style={STYLES(item == news.selectedCategory && {color: 'white'}).categoryText}>{item}</Text>
            </TouchableOpacity>
        )
    }

    const select = () => null

    return (
        <View style={{ width:'100%'}}>
            <FlatList 
                data={news.categories || []}
                renderItem={renderItem}
                horizontal={true}
            />
        </View>

    )
}

export default Categories