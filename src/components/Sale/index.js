import {View, Text} from "react-native";
import { Card } from "../index";
import { styles } from "./styles";

const Sale = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Sale 33% off</Text>
            <View style={styles.cardsContainer}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </View>
        </View>
    )
}

export default Sale