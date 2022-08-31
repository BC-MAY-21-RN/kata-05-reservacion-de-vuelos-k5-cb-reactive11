/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import {SignUpScreen} from './screens';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignUpScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
