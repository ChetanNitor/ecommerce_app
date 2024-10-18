// SignupStyles.ts
import {StyleSheet} from 'react-native';

const signupStyles = StyleSheet.create({
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
  signupButton: {
    backgroundColor: '#3b82f6',
  },
  dropdownContainer: {
    marginVertical: 1,
  },
  pickerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
  },
  picker: {
    flex: 1,
    height: 35,
    color: '#000',
  },
  icon: {
    marginRight: 10,
  },
  label: {
    marginBottom: 5,
    fontWeight: '500',
    color: 'gray',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  inputField: {
    fontSize: 14,
  },
});

export default signupStyles;
