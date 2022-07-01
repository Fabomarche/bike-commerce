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
                    <View style={styles.button}>
                        <Button 
                            title='Go to Products Categories' 
                            onPress={()=> navigation.navigate('Categories')}
                            color="#80968E"
                        />
                    </View>
                    <Recommended />
                    <Sale/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

