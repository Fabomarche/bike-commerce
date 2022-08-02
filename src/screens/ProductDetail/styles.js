import { StyleSheet, Dimensions } from "react-native";
import theme from "../../constants/theme";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
  details: {
    height: height / 2,
    justifyContent: "space-around",
      },
  text: {
    fontFamily: "Lato",
    fontSize: theme.fontSize.xxxl,
    color: theme.colors.texSecondaryColor
  },
  title: {
    fontFamily: "Lato-Bold",
    fontSize: 50,
    color: theme.colors.texSecondaryColor,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 10
  },
});