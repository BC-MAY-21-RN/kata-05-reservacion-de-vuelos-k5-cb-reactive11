import {  Text , View  } from "react-native";
import { styles } from "./styles";
import React from "react";
import { TextInputComponent, ButtonComponent, CheckBoxComponent } from "../../components";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInputComponent title="First name"/>
      <TextInputComponent title="Email *"/>
      <TextInputComponent title="Password *" help={'Use 8 or more characters with a mix of letters, numbers, and symbols.'}/>

      <CheckBoxComponent text='I agree to the Terms and Privacy Policy'/>
      <CheckBoxComponent text='Subscribe for select product updates.'/>

      <ButtonComponent title='Sign Up' textColor='#fff' bgColor='gray'/>
      <View style={styles.orSection}>
        <Text>or</Text>
      </View>
      <ButtonComponent title='Sign Up with Google' textColor='#fff' bgColor='gray' icon="google"/>
      <View style={styles.loginSection}>
        <Text style={styles.textColor}>Already have an account?</Text>
        <Text style={styles.linkColor}>Log In</Text>
      </View>

    </View>
  );
};

export default SignUpScreen;
