import {View, TextInput, Text} from "react-native";
import { styles } from "./style";


const Find = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Find your Bike</Text>
            <TextInput style={styles.input}/>
        </View>
    )
}

export default Find