import { Text, View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { ButtonComponent, TextInputComponent } from '../../components';
import { styles } from './styles';
import { useGoogle } from '../../hooks/useGoogle';
import { signInHandler } from '../../hooks/emailPwd';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const LoginScreen = ({ navigation }) => {
  const [EmailBorderColor, setEmailBorderColor] = useState('grey');
  const [passwordBorderColor, setPasswordBorderColor] = useState('grey');

  const [onGoogleButtonPress, signOut] = useGoogle(navigation);
  const [emailSignIn, emailLogin] = signInHandler(navigation);
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const [errorInput, setErrorInput] = useState();
  const regexEmail = /\S+@\S+\.\S+/

  const handleChange = (value, name, setBorder, borderState) => {
    setInput(state => ({ ...state, [name]: value }));
    setBorder(borderState);
    if (value == '') setBorder('grey');
  };

  const isValidEmail=(email)=>{
    if(email){
      !regexEmail.test(email) ?
       setErrorInput('   *Invalid Email*')
       : 
       setErrorInput(null)
    }else{
      setErrorInput(null)
    }
    
    return regexEmail.test(email) 
  }


  return (
    <SafeAreaView style={styles.globalContainer}>
      <View style={styles.container}>
     
        <TextInputComponent
          title="Email"
          keyboardType={'email-address'}
          onChangeText={value => {
            handleChange(value, 'email', setEmailBorderColor, '#6270de')
            isValidEmail(value)
            }
          }
          bdColor={EmailBorderColor}
          error={errorInput}
          
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
        <ButtonComponent
          title="Log in"
          bgColor={(errorInput) ? 'grey' : 'blue'}
          onPress={() => emailLogin(input.email, input.password)}
          disabled={(errorInput) ? 'true' : 'false'}
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
