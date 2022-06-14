import { StyleSheet } from "react-native";
import theme from "../../constants/theme";


export const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        alignItems:'center'
    },
    title:{
        fontSize:theme.fontSize.xxxl,
        textAlign:'center'
    },
    card:{
        width:'100%'
    },
    description:{
        padding:'5%'
    }
})
