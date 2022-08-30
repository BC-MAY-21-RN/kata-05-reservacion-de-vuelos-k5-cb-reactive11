import { StyleSheet, Text, TextInput, View, Platform, StatusBar } from "react-native";
import React from "react";
import { TextInputComponent, ButtonComponent, CheckBoxComponent } from "../components";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInputComponent title="First name"/>
      <TextInputComponent title="Email *"/>
      <TextInputComponent title="Password *" hint={'Use 8 or more characters with a mix of letters, numbers, and symbols.'}/>

      <CheckBoxComponent text='I agree to the Terms and Privacy Policy'/>
      <CheckBoxComponent text='Subscribe for select product updates.'/>

      <ButtonComponent title='Sign Up' textColor='#fff' bgColor='gray'/>
      <View style={styles.orSection}>
        <Text>or</Text>
      </View>
      <ButtonComponent title='Sign Up with Google' textColor='#fff' bgColor='gray' icon="google"/>
      <View style={styles.loginSection}>
        <Text style={{color:'grey'}}>Already have an account?</Text>
        <Text style={{color:'blue',textDecorationLine:'underline'}}>Log In</Text>
      </View>

    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    marginHorizontal: 'auto',
  },
  inputContainer: {

  },
  title: {
    color: '#6270de',
    fontWeight: '800',
    fontSize:24,
    paddingVertical:30,
  },
  orSection: {
    alignItems: 'center',
    marginVertical:10,
  },
  loginSection:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:20,
    paddingBottom:10,
  },
 
  
});
