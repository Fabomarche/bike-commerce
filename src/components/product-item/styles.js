import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 20,
    height: 180,
  },
  containerTouchable: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
    shadowColor: theme.colors.primary,
    justifyContent: "space-around",
    padding: 10,
    borderColor: theme.colors.texSecondaryColor,
    borderWidth: 4,
  },
  name: {
    fontSize: 40,
    fontFamily: "Lato-Bold",
    color: theme.colors.texSecondaryColor,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 10
  },
  detail: {
    fontFamily: "Lato",
    fontSize: theme.fontSize.xxl,
    color: theme.colors.texSecondaryColor,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
});