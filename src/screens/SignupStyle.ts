// SignupStyles.ts
import {StyleSheet} from 'react-native';

const signupStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#F5F5F5', // Light background
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    marginBottom: 5,
    borderRadius: 10, // Rounded inputs
    backgroundColor: '#FFF',
  },
  button: {
    marginVertical: 12,
    borderRadius: 10, // Rounded button
  },
  error: {
    color: 'red',
    marginBottom: 8,
    fontSize: 13,
    marginTop: 2,
  },
});

export default signupStyles;
