import { View, Text, Button } from 'react-native'
import { styles } from './styles'

const ProductsScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Product Screen</Text>
            <Button title="Go to Product Details" onPress={()=> navigation.navigate('ProductsDetails')} />
        </View>
    )
}

export default ProductsScreen