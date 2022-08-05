import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
    containerKeyboard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
    },
    container: {
        height: 380,
        width: '80%',
        maxWidth: 400,
        padding: 15,
        margin: 15,
        borderColor: theme.colors.secondary,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    label: {
        fontSize: 14,
        fontFamily: "Lato-Bold",
        marginVertical: 5,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    authButton: {
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 80,
        borderRadius: 5,
    },
    authButtonText: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        paddingVertical: 5,
    },
    signError: {
        color: theme.colors.error,
        fontFamily: 'Lato-Bold',
        textAlign: 'center',
    },
    propmt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    propmtMessage: {
        fontSize: 14,
        fontFamily: 'Lato',
        color: theme.colors.text,
        marginRight: 15
    },
    propmtButton: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: theme.colors.primary,
        textAlign: 'center',
    }
});