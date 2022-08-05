import { View, TouchableOpacity, Text } from "react-native";
import IonicIcons from '@expo/vector-icons/Ionicons'
import { styles } from "./styles";
import theme from "../../constants/theme";

const CartItem = ({ item, onDelete }) => {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
            </View>
            <View style={styles.containerDetail}>
                <View style={styles.detail}>
                    <Text style={styles.detailQty}>
                        quantity: {item.quantity}
                    </Text>
                    <Text style={styles.detailPrice}>
                        $ {item.price}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={()=> onDelete(item.id)}>
                        <IonicIcons name="trash" size={20} color={theme.colors.primary}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItem