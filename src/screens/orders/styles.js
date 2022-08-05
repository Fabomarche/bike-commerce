import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        borderTopWidth: 5,
        borderTopColor: theme.colors.lightBlue
    },
    orderList: {
        flex:1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },

})