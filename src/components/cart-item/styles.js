import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: theme.colors.lightBlue,
    borderRadius:15,
    padding:10,
    marginBottom: 10,
    backgroundColor:'rgba(52, 52, 52, 0.2)',
  },
  headerContainer: {},
  header: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },
  containerDetail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detail: {
    alignContent:'center',
    justifyContent: "flex-start"
  },
  title:{
    fontSize: 20,
    fontFamily: "Lato-Bold",
    color: theme.colors.texSecondaryColor
  },
  detailQty: {
    fontSize: 15,
    fontFamily: "Lato",
    color: theme.colors.texSecondaryColor
  },
  detailPrice: {
    fontSize: 20,
    fontFamily: "Lato",
    color: theme.colors.texSecondaryColor
  },
});