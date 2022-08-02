import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    borderTopWidth: 5,
    borderTopColor: theme.colors.lightBlue
  },
});