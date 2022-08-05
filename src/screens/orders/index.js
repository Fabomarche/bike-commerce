import { useEffect } from "react";
import { View, FlatList, ImageBackground } from "react-native";
import { styles } from "./styles";
import { OrderItem } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, deleteOrder } from "../../store/actions/order.action";

const OrdersScreen = () => {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.order.items)
    
    const onDeleteOrder = (id) => {
        dispatch(deleteOrder(id))
    }
    const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDeleteOrder}/>

    useEffect(() => {
        dispatch(getOrders())
    }, [])
    

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/img/portada2.jpg')} resizeMode="cover" style={styles.image}>
                <View style={styles.orderList}>
                    <FlatList
                        data={orders}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />    
                </View>
            </ImageBackground>
        </View>
    )
}

export default OrdersScreen