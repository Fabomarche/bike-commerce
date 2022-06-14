import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:theme.colors.lightBlue,
        marginVertical:'5%'
    },
    title:{
        // fontFamily: "ubuntu",
        fontSize:theme.fontSize.xxxl,
        textAlign:'center',
        marginVertical:'5%'
    },
    image:{
        width: "100%",
        height: 300,
    },
})
