import { useSelector, useDispatch } from 'react-redux'
import { Text, View, Button } from "react-native"
import { addItem } from '../../store/actions/cart.action'
import { styles } from "./styles";
import theme from '../../constants/theme';

const ProductDetailScreen = ({ route }) => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product.selected)
    const { productId } = route.params

    const onHandleraddToCart = () => {
        dispatch(addItem(product))
    }

    return(
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.text}>{product.description}</Text>
                <Text style={styles.text}>{product.weight}</Text>
                <Text style={styles.text}>$ {product.price}</Text>
                <Button color={theme.colors.primary} title="Add to cart" onPress={() => onHandleraddToCart() } />
            </View>
        </View>
    )
}

export default ProductDetailScreen
