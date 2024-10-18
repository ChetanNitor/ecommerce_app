// LoginStyles.ts
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  innerContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: '#3b82f6',
  },
  signupButton: {
    borderColor: '#3b82f6',
  },
  forgotPasswordText: {
    color: '#3b82f6',
    textAlign: 'center',
  },
});

export default styles;
