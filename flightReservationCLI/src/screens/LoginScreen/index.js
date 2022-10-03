import { Text, View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { ButtonComponent, TextInputComponent } from '../../components';
import { styles } from './styles';
import { useGoogle } from '../../hooks/useGoogle';
import { signInHandler } from '../../hooks/emailPwd';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import useForm from '../../hooks/useForm';

const LoginScreen = ({ navigation }) => {
  const [emaill,
    passwordd,
    name,
    subscribe,
    terms,
    validEmaill,
    validLogin] = useForm(); /*??????*/

  const [onGoogleButtonPress, signOut] = useGoogle(navigation);
  const [emailSignIn, emailLogin] = signInHandler(navigation);


  return (
    <SafeAreaView style={styles.globalContainer}>
      <View style={styles.container}>

        <TextInputComponent
          {...emaill}
          title="Email"
          keyboardType={'email-address'}
          validationInput={validEmaill}
          validationError={(validEmaill) ? null : '*Invalid Email*'}
        />

        <TextInputComponent
          {...passwordd}
          enablePassword={true}
          title="Password *"
          help={
            'Use 8 or more characters with a mix of letters, numbers, and symbols.'
          }
        />

        <ButtonComponent
          title="Log in"
          bgColor={validLogin ? '#6170F7' : 'grey'}
          onPress={() => emailLogin(emaill.value, passwordd.value)}
          disabled={(validLogin) ? false : true}
        />
        <View style={styles.orSection}>
          <Text style={styles.orText}>or</Text>
        </View>
        <ButtonComponent
          title="Sign Up with Google"
          textColor="#fff"
          bgColor="gray"
          icon={faGoogle}
          onPress={() => onGoogleButtonPress()}
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
