import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const signInHandler = navigation => {
  const emailSignIn = (email, password) => {
    console.log('asdasd');
    console.log(email, password);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => Alert.alert(error));
  };

  const emailLogin = (email, password) => {
    console.log(email, password);
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => Alert.alert(error));
  };

  return [emailSignIn, emailLogin];
};
