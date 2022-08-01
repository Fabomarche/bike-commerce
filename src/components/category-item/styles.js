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
    shadowColor: theme.colors.lightBlue,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
},
  title: {
    fontSize: 40,
    textTransform:'uppercase',
    color: 'white',
    fontFamily: "Lato-Bold",
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
},
});