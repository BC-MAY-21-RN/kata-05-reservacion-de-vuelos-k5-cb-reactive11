import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const useGoogle = navigation => {
  GoogleSignin.configure({
    webClientId:
      '634710085174-cve0korshs3te68k8tjp947dodf959va.apps.googleusercontent.com',
  });
  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return [onGoogleButtonPress, signOut];
};
