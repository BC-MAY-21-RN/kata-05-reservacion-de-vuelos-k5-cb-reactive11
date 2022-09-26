import { Text, View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { ButtonComponent, TextInputComponent } from '../../components';
import { styles } from './styles';
import { useGoogle } from '../../hooks/useGoogle';

const LoginScreen = ({ navigation }) => {
  const [onGoogleButtonPress, signOut] = useGoogle(navigation);
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleChange = (value, name) => {
    setInput(state => ({ ...state, [name]: value }));
  };

  return (
    <SafeAreaView style={styles.globalContainer}>
      <View style={styles.container}>
        <TextInputComponent
          title="Email *"
          keyboardType={'email-address'}
          onChangeText={value => handleChange(value, 'email')}
        />
        <TextInputComponent
          title="Password *"
          enablePassword={true}
          onChangeText={value => handleChange(value, 'password')}
        />
        <ButtonComponent
          title="Log in"
          bgColor="gray"
          onPress={() => {
            navigation.navigate('MyFlightsScreen', {
              credentials: input,
            });
          }}
        />
        <View style={styles.orSection}>
          <Text style={styles.orText}>or</Text>
        </View>
        <ButtonComponent
          title="Sign Up with Google"
          textColor="#fff"
          bgColor="gray"
          icon="google"
          onPress={() => onGoogleButtonPress()}
        />

        {/* <GoogleSignInComponent />*/}
        <ButtonComponent
          title="log out"
          textColor="#fff"
          bgColor="gray"
          onPress={signOut}
        />
        <View style={styles.singUpAlternative}>
          <Text style={styles.singUpAlternativeText}>
            Don't have an account?
          </Text>
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate('SignUpScreen')}>
            Sign up
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
