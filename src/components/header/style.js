import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        height: 96,
        backgroundColor: theme.colors.primary,
    }
})
