import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    backgroundColor:'rgba(52, 52, 52, 0.8)',
    marginTop: 15
  },
  headerContainer: {},
  header: {
    fontSize: 25,
    fontFamily: "Lato-Bold",
    color: theme.colors.texSecondaryColor
  },
  containerDetail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    
  },
  detail: {},
  detailTotal: {
    fontSize: 20,
    fontFamily: "Lato",
    color: theme.colors.texSecondaryColor
  },
});