import {View, Text, Image} from "react-native";
import { styles } from "./styles";

const Card = ({ style }) => {
    return(
        <View style={{...styles.container, ...style}}>
            <Text>Bike X</Text>
            <Image 
                source={{ uri:'https://www.heavenimagenes.com/heavencommerce/68ac9d04-8767-4aca-9951-49f2fea1383b/images/v2/TEKNIAL/19961_medium.jpg'}}
                style={styles.image}
            />
            <Text>$2000</Text>
        </View>
    )
}

export default Card