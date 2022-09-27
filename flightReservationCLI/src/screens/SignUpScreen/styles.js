import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    width: '90%',
    marginHorizontal: 'auto',
    paddingTop: 10,
  },
  title: {
    color: '#6270de',
    fontWeight: '800',
    fontSize: 24,
    paddingVertical: 30,
  },
  orText: {
    color: 'black',
  },
  orSection: {
    alignItems: 'center',
    marginVertical: 10,
  },
  loginSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  linkColor: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  textColor: {
    color: 'grey',
  },
});
