import { Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { ButtonComponent, TextInputComponent } from "../../components";
import styles from "./styles";

const LoginScreen = ({ navigation }) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (value, name) => {
    setInput((state) => ({ ...state, [name]: value }));
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
        <ButtonComponent
          title="Log in"
          bgColor="gray"
          onPress={() => {
            navigation.navigate("MyFlightsScreen", {
              credentials: input,
            });
          }}
        />
        <View style={styles.orSection}>
          <Text>or</Text>
        </View>
        <ButtonComponent
          title="Log in with Google"
          bgColor="gray"
          icon="google"
          textColor="#fff"
          onPress={() => navigation.navigate("MyFlightsScreen")}
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
