import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    title:{
        fontSize:theme.fontSize.xxxl,
        marginBottom:'5%',
    },
    input:{
        backgroundColor:theme.colors.backgroundColor,
        width:'65%',
        height:35,
        borderRadius:12,
        color:'white'
    }
})
