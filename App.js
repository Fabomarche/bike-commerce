import { ActivityIndicator } from 'react-native';
import { useFonts }from 'expo-font'
import { Provider } from 'react-redux';
import store from './src/store'
import Root from './src';

export default function App() {
  const [loaded] = useFonts({
    'ubuntu': require('./assets/fonts/Ubuntu.ttf'),
    'Lato': require('./assets/fonts/Lato.ttf'),
    'Lato-Bold': require('./assets/fonts/LatoBold.ttf'),
    'Lato-Italic': require('./assets/fonts/LatoItalic.ttf')
  })

  if(!loaded) {
    return <ActivityIndicator size="large" color="#0000ff"/>
  }

  return (
      <Provider store={store}>
        <Root />
      </Provider>
  );
}

