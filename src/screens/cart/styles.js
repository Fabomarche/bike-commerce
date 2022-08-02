import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: theme.colors.backgroundColor,
  },
  cartList: {
    flex: 1,
  },
  footer: {
    borderTopColor: theme.colors.primary,
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  buttonConfirm: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonAddres:{
    backgroundColor: theme.colors.primary,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    color: theme.colors.texSecondaryColor
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Lato-Bold",
    color: theme.colors.texSecondaryColor,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  totalContainer: {
    flex: 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    
  },
  totalTitle: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
    color: theme.colors.texSecondaryColor,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  total: {
    fontSize: 20,
    fontFamily: "Lato",
    color: theme.colors.texSecondaryColor,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
});