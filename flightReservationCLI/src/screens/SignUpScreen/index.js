import {
  ButtonComponent,
  CheckBoxComponent,
  TextInputComponent,
} from '../../components';
import React, { useState } from 'react';
import { styles } from './styles';
import { Text, View, SafeAreaView } from 'react-native';
import { useGoogle } from '../../hooks/useGoogle';
import { signInHandler } from '../../hooks/emailPwd';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const SignUpScreen = ({ navigation }) => {
  const [FisrtNameBorderColor, setFirtstNameBorderColor] = useState('grey');
  const [EmailBorderColor, setEmailBorderColor] = useState('grey');
  const [passwordBorderColor, setPasswordBorderColor] = useState('grey');

  const [onGoogleButtonPress, signOut] = useGoogle(navigation);
  const [emailSingin] = signInHandler(navigation);

  const [input, setInput] = useState({
    firstName: '',
    email: '',
    password: '',
  });

  const handleChange = (value, name, setBorder, borderState) => {
    setInput(state => ({ ...state, [name]: value }));
    setBorder(borderState);
    if (value == '') setBorder('grey');
  };

  return (
    <SafeAreaView style={styles.globalContainer}>
      <View style={[styles.container]}>
        <TextInputComponent
          title="First name"
          keyboardType={'default'}
          onChangeText={value =>
            handleChange(
              value,
              'firstName',
              setFirtstNameBorderColor,
              '#6270de',
            )
          }
          bdColor={FisrtNameBorderColor}
        />
        <TextInputComponent
          title="Email *"
          keyboardType={'email-address'}
          onChangeText={value =>
            handleChange(value, 'email', setEmailBorderColor, '#6270de')
          }
          bdColor={EmailBorderColor}
        />
        <TextInputComponent
          enablePassword={true}
          title="Password *"
          help={
            'Use 8 or more characters with a mix of letters, numbers, and symbols.'
          }
          onChangeText={value =>
            handleChange(value, 'password', setPasswordBorderColor, '#6270de')
          }
          bdColor={passwordBorderColor}
        />
        <CheckBoxComponent text="I agree to the Terms and Privacy Policy" />
        <CheckBoxComponent text="Subscribe for select product updates." />
        <ButtonComponent
          title="Sign Up"
          textColor="#fff"
          bgColor="gray"
          onPress={() => emailSingin(input.email, input.password)}
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
        <View style={styles.loginSection}>
          <Text style={styles.textColor}>Already have an account?</Text>
          <Text
            style={styles.linkColor}
            onPress={() => navigation.navigate('LoginScreen')}>
            Log In
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
