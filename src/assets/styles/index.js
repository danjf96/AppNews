import { Dimensions, StyleSheet } from 'react-native'
import COLORS from './Colors'
const { width, height } = Dimensions.get('window')

const STYLES = (customStyles = {}) => StyleSheet.create({
    categorieButton: {
        borderWidth: 1, borderRadius: 12, padding: 10, minWidth: 100,
        ...customStyles
    },
    categoryText: {
        textAlign: 'center', fontSize: 14,
        ...customStyles
    }
})

export { width, height }
export default STYLES