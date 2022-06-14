import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:theme.colors.primary
    },
    title:{
        fontSize:theme.fontSize.xxxl,
        textAlign:'center',
        marginVertical:'2%'
    },
    cardsContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        padding:'5%'
    }
})
