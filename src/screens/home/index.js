import { View, Pressable } from "react-native"
import { Find, Header, Recommended, Sale } from "../../components/index"
import theme from "../../constants/theme"
import { styles } from "./styles"


const Home = ( { onProductDetail } ) => {
    return(
        <View style={styles.container}>
            <Header/>
            <Find/>
                <Pressable onPress={ ()=> onProductDetail()}>
                    <Recommended />
                </Pressable>
            <Sale/>
        </View>
    )
}

export default Home

