import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview:{
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.secondary,
    borderWidth:1,
  },
  actions:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width:'100%'    
  }
});