import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    alignItems:'center',
  },
  image:{
    width: 125,
    height: 125,
    marginTop: 25,
},
  title:{
    color: 'white',
    fontSize: 35,
    fontFamily: "Lato-Bold",
    textTransform:'uppercase',
    marginBottom:25,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  text:{
    color: 'white',
    fontSize: 20,
    fontFamily: "Lato",
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.lightBlue,
  }
});