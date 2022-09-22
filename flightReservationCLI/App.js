import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import GoogleSignIn from './src/components/GoogleSignIn.js';

const App = () => {
  return (
    <View>
      <Text>App</Text>

      <GoogleSignIn />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
