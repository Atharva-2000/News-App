
import { SafeAreaView, StyleSheet, Text, View , StatusBar} from 'react-native';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './src/navigations/HomeNavigator';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
          <HomeNavigator/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    padding: 20
  },
});
