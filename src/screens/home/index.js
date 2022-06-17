import { View, Button, SafeAreaView, ScrollView, } from "react-native"
import { Find, Header, Recommended, Sale } from "../../components/index"
import theme from "../../constants/theme"
import { styles } from "./styles"


const Home = ( {  navigation } ) => {
    return(
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Header/>
                    <Find/>
                    <Button 
                        title='Go to Products' 
                        onPress={()=> navigation.navigate('Products')}
                        style={styles.button}
                    />
                    <Recommended />
                    <Sale/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

