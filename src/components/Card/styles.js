import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        width: "40%",
        borderColor:theme.colors.backgroundColor,
        borderStyle:'solid',
        borderWidth:2,
        margin:'2%'
    },
    image:{
        width: "100%",
        height: 300,
    }
})
