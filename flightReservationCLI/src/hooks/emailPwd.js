import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const signInHandler = navigation => {
  const emailSignIn = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => alert('Error', 'Something went wrong'));
  };

  const emailLogin = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error =>
        alert('Error with email and/or password', 'Something went wrong'),
      );
  };

  return [emailSignIn, emailLogin];
};
