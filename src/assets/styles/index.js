import { Dimensions, StyleSheet } from 'react-native'
import COLORS from './Colors'
const { width, height } = Dimensions.get('window')
const LOGO = require('../../assets/imgs/logo.jpg')

const STYLES = (customStyles = {}) => StyleSheet.create({
    categorieButton: {
        borderWidth: 1, borderRadius: 12, padding: 10, minWidth: 100,
        ...customStyles
    },
    categoryText: {
        textAlign: 'center', fontSize: 14, color:'black',
        ...customStyles
    },

    h1: { fontSize: 25, fontWeight:'bold',textAlign: 'left', marginVertical: 15, width:'100%', ...customStyles },

    text: { fontSize: 18, textAlign: 'center', marginVertical: 15, width:'100%', ...customStyles },

    container: { flex: 1, width:'100%', padding: 12, alignItems:'center', justifyContent:'flex-start', ...customStyles },

    cardNews: { flex: 1, flexDirection:'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1.2, borderColor: COLORS.lightgray, ...customStyles },

})

export { width, height, LOGO }
export default STYLES