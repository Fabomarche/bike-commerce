import { useSelector } from 'react-redux'
import { Text, View } from "react-native"
import { styles } from "./styles";
import { Card } from "../../components/index"

const ProductDetailScreen = ({ route }) => {
    const product = useSelector(state => state.product.selected)
    const { productId } = route.params
    
    return(
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.text}>id: {product.id}</Text>
                <Text style={styles.text}>{product.title}</Text>
                <Text style={styles.text}>{product.description}</Text>
                <Text style={styles.text}>{product.weight}</Text>
                <Text style={styles.text}>{product.price.toFixed(2)}</Text>
            </View>
        </View>
    )
}

export default ProductDetailScreen
