import { Text, View } from "react-native";
import React from "react";
import {
  ButtonComponent,
  TextInputComponent,
  TitleComponent,
} from "../../components";
import styles from "./styles";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <TitleComponent title="Log in" />
      <TextInputComponent title="Email *" keyboardType={"email-address"}/>
      <TextInputComponent
        title="Password *"
        enablePassword={true}
      />
      <ButtonComponent title="Log in" bgColor="gray" />
      <View style={styles.orSection}>
        <Text>or</Text>
      </View>
      <ButtonComponent
        title="Log in with Google"
        bgColor="gray"
        icon="google"
        textColor="#fff"
      />
      <View style={styles.singUpAlternative}>
        <Text style={styles.singUpAlternativeText}>Don't have an account?</Text>
        <Text style={styles.signUpLink}>Sign up</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
