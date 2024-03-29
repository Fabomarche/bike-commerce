import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        borderBottomColor: theme.colors.primary,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: "Lato",
        marginBottom: 10,
    },
    message: {
    },
    helperText: {
        fontFamily: 'Lato-Bold',
        fontSize: 12,
        color: theme.colors.error
    },
})