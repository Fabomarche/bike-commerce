import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontFamily: 'Lato-Bold',
    textAlign: 'center',
    fontSize: 16, 
  },
  userNameContainer: {
    margin: 10,
    height: 190,
  },
  userNameBtn: {
    alignItems: 'center',
    marginHorizontal: '25%',
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
    marginBottom: 20,
  },
  textBtn: {
    paddingVertical: 10,
    color: 'white',
    fontFamily: 'Lato-Bold'
  },
  userImgContainer: {
    margin: 10,
    flex: 1,
  },
});