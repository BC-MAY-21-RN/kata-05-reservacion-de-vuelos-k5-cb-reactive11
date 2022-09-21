import {
  ButtonComponent,
  CheckBoxComponent,
  TextInputComponent,
} from "../../components";
import React, { useState } from "react";
import { styles } from "./styles";
import { Text, View, SafeAreaView } from "react-native";

const SignUpScreen = ({ navigation }) => {
  const [FisrtNameFilled, setFirtstNameFilled] = useState(false);
  const [EmailFilled, setEmailFilled] = useState(false);
  const [passwordFilled, setPasswordFilled] = useState(false);
  //const [borderColor, setBorderColor] = useState(false);

  const [input, setInput] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const handleChange = (value, name, setBorder, borderState) => {
    setInput((state) => ({ ...state, [name]: value }));
    setBorder(borderState);
    if (value == "") setBorder(false);
  };

  return (
    <SafeAreaView style={styles.globalContainer}>
      <View style={[styles.container]}>
        <TextInputComponent
          title="First name"
          keyboardType={"default"}
          onChangeText={(value) =>
            handleChange(value, "firstName", setFirtstNameFilled, true)
          }
          isFilled={FisrtNameFilled}
        />
        <TextInputComponent
          title="Email *"
          keyboardType={"email-address"}
          onChangeText={(value) =>
            handleChange(value, "email", setEmailFilled, true)
          }
          isFilled={EmailFilled}
        />
        <TextInputComponent
          enablePassword={true}
          title="Password *"
          help={
            "Use 8 or more characters with a mix of letters, numbers, and symbols."
          }
          onChangeText={(value) =>
            handleChange(value, "password", setPasswordFilled, true)
          }
          isFilled={passwordFilled}
        />

        <CheckBoxComponent text="I agree to the Terms and Privacy Policy" />
        <CheckBoxComponent text="Subscribe for select product updates." />

        <ButtonComponent
          title="Sign Up"
          textColor="#fff"
          bgColor="gray"
          onPress={() =>
            navigation.navigate("MyFlightsScreen", { credentials: input })
          }
        />
        <View style={styles.orSection}>
          <Text>or</Text>
        </View>
        <ButtonComponent
          title="Sign Up with Google"
          textColor="#fff"
          bgColor="gray"
          icon="google"
          onPress={() => navigation.navigate("MyFlightsScreen")}
        />
        <View style={styles.loginSection}>
          <Text style={styles.textColor}>Already have an account?</Text>
          <Text
            style={styles.linkColor}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            Log In
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
