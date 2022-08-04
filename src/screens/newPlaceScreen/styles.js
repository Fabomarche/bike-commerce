import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 30
    },
    label:{
      fontSize:18,
      marginBottom:16
    },
    input:{
      borderBottomColor: theme.colors.secondary,
      borderBottomWidth:1,
      marginBottom:16,
      paddingHorizontal: 2,
      paddingVertical: 4
    }
  });