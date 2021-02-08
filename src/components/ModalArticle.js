import React, { } from 'react'
import { Dimensions, Image, Linking, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import  Icon  from 'react-native-vector-icons/AntDesign'
import { cleanArticle } from '../store/ducks/article'
import STYLES from '../assets/styles'
import { getPhotoArticle } from '../utils/functions'
import moment from 'moment'

const { width, height } = Dimensions.get('window')

const ModalArticle = () => {
    const dispatch = useDispatch()
    const { openModal, title, byline, published_date, multimedia, abstract, section, url } = useSelector( ({ article }) => ({ ...article }))
    const photo = getPhotoArticle(multimedia, 'mediumThreeByTwo210')

    return (
        <Modal visible={openModal} transparent animationType={'fade'}>
            <SafeAreaView style={{ ...styles.background}}>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.close} onPress={() => dispatch(cleanArticle()) }>
                        <Icon name='closecircleo' size={30} color={'black'} />
                    </TouchableOpacity>

                    <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
                        <Text style={STYLES({ marginVertical: 0, marginBottom: 15}).h1}>Article</Text>

                        <Image source={{ uri: photo.url}} style={{ width: '100%',minHeight: photo.height, marginVertical: 15, borderRadius: 6 }} resizeMode={'contain'} />

                        <Text style={STYLES({ fontSize: 22, textAlign: 'center' }).h1}>{title}</Text>

                        <Text style={STYLES({ textAlign: 'justify' }).text}>{abstract}</Text>

                        <Text style={STYLES({ textAlign:'left' }).text}><Text style={{ fontWeight:'bold'}}>Author:</Text> {byline}</Text>

                        <Text style={STYLES({ textAlign:'left' }).text}><Text style={{ fontWeight:'bold'}}>Published:</Text> {moment(published_date).format('DD/MM/YYYY H:mm')}</Text>     

                        <TouchableOpacity onPress={ () => Linking.openURL(url)}>
                            <Text style={STYLES({ color: '#4285f4', textAlign:'left'}).text}><Text style={{ fontWeight:'bold'}}>Read more: </Text>{url}</Text>         
                        </TouchableOpacity>                           

                    </ScrollView>
                </View>

            </SafeAreaView>            
        </Modal>
    )
}

const styles = StyleSheet.create({
    background: { width, height, backgroundColor: '#00000063', flex:1, flexDirection:"column", alignItems:'center',justifyContent:'center' },
    container: {  width: width * 0.9, minHeight: 500, maxHeight: '90%', backgroundColor:"white", borderRadius: 20, paddingVertical: 20, height:'100%' },
    close: { position:'absolute', right: 15, top: 15,zIndex: 9999 }
})

export default ModalArticle