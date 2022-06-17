import { useFonts }from 'expo-font'
import { ActivityIndicator } from 'react-native';
import Root from './src';

export default function App() {
  const [loaded] = useFonts({
    'ubuntu': require('./assets/fonts/Ubuntu.ttf')
  })

  if(!loaded) {
    return <ActivityIndicator size="large" color="#0000ff"/>
  }

  return (
        <Root />
  );
}

