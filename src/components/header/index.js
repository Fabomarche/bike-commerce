import {View, Button, Text} from "react-native";
import theme from "../../constants/theme";
import { styles } from "./style";

const Header = () => {
    return(
        <View style={styles.container}>
            <Button title="Hamburger" onPress={()=>null} color={theme.colors.backgroundColor}/>
            <Text>Logo</Text>
        </View>
    )
}

export default Header