import { useState } from 'react';
import { View, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import Home from './src/screens/home';
import ProductDetail from './src/screens/ProductDetail';
import { useFonts }from 'expo-font'
import { styles } from './styles';

export default function App() {
  // const [loaded] = useFonts({
  //   "ubuntu": require("./assets/fonts/Ubuntu.ttf")
  // })

  const [conditional, setConditional] = useState(true)

  const onProductDetail =()=>{
    setConditional(false)
  }
  const onHome =()=>{
    setConditional(true)
  }

  // if(!loaded) {
  //   return <ActivityIndicator size="large" color="#0000ff"/>
  // }

  let content = <Home onProductDetail={onProductDetail}/>
  if(!conditional) content=<ProductDetail onHome={onHome}/>

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <View  style={styles.container}>
        {content}
      </View>
    </ScrollView>  
    </SafeAreaView>
  );
}

