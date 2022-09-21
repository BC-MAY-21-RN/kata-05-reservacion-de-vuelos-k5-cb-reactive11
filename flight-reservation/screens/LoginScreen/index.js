import { Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { ButtonComponent, TextInputComponent } from "../../components";
import styles from "./styles";
import { auth, provider } from "../../assets/firebase-auth";
import { signInWithEmailAndPassword, signInWithRedirect, getRedirectResult } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (value, name) => {
    setInput((state) => ({ ...state, [name]: value }));
  };

  const handleGoogleLogIn = () => {
    signInWithRedirect(auth, provider);

    getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  };

  const handleLogIn = () => {
    signInWithEmailAndPassword(auth, input.email, input.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        navigation.replace("MyFlightsScreen", { user });
      })
      .catch((error) => alert("Error en correo o contreseña"));
  };
  return (
    <SafeAreaView style={styles.globalContainer}>
      <View style={styles.container}>
        <TextInputComponent
          title="Email *"
          keyboardType={"email-address"}
          onChangeText={(value) => handleChange(value, "email")}
        />
        <TextInputComponent
          title="Password *"
          enablePassword={true}
          onChangeText={(value) => handleChange(value, "password")}
        />
        <ButtonComponent title="Log in" bgColor="gray" onPress={handleLogIn} />
        <View style={styles.orSection}>
          <Text>or</Text>
        </View>
        <ButtonComponent
          title="Log in with Google"
          bgColor="gray"
          icon="google"
          textColor="#fff"
          onPress={handleGoogleLogIn}
        />
        <View style={styles.singUpAlternative}>
          <Text style={styles.singUpAlternativeText}>
            Don't have an account?
          </Text>
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            Sign up
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
