import {View, Button, Text} from "react-native";
import theme from "../../constants/theme";
import { styles } from "./style";

const Header = () => {
    return(
        <View style={styles.container}>
            <Button title="Hamburger" onPress={()=>null} color={theme.colors.backgroundColor}/>
            <Text>Logo</Text>
            <Button title="Cart" onPress={()=>null} color={theme.colors.backgroundColor}/>
        </View>
    )
}

export default Header