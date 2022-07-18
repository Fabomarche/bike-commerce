import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
    containerKeyboard:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        height:340,
        width:'80%',
        maxWidth:400,
        padding: 15,
        margin: 15,
        borderColor: theme.colors.secondary,
        borderWidth: 1,
        borderRadius:10,
        backgroundColor: theme.colors.white,
    },
    label:{
        fontSize:14,
        fontFamily:'Lato-Bold',
        marginVertical:5
    },
    title:{
        fontSize:18,
        fontFamily:'Lato-Bold',
        marginBottom:15,
        textAlign:'center'
    },
    propmt:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    propmtMessage:{
        fontSize: 14,
        fontFamily:'Lato',
        color: theme.colors.text,
        marginRight: 15
    },
    propmtButton:{
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: theme.colors.secondary,
        textAlign:'center',
        marginVertical:10
    }
})