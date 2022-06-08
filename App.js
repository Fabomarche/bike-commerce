import { StyleSheet, View } from 'react-native';
import { Header,Find, Sale,Recommended}  from './src/components/index'

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Find/>
      <Sale/>
      <Recommended/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
