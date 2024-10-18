// Signup.tsx
import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Button, Title, Snackbar} from 'react-native-paper';
import signupStyles from './SignupStyle';

const SignupScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // State to manage error messages
  const [errors, setErrors] = useState<{
    username: string;
    firstName: string;
    lastName: string;
    city: string;
    password: string;
  }>({
    username: '',
    firstName: '',
    lastName: '',
    city: '',
    password: '',
  });

  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');

  const handleSignup = useCallback(() => {
    // Clear previous errors
    setErrors({
      username: '',
      firstName: '',
      lastName: '',
      city: '',
      password: '',
    });

    let valid = true;

    // Validate inputs
    if (!username) {
      setErrors(prev => ({...prev, username: 'Username is required.'}));
      valid = false;
    }
    if (!firstName) {
      setErrors(prev => ({...prev, firstName: 'First Name is required.'}));
      valid = false;
    }
    if (!lastName) {
      setErrors(prev => ({...prev, lastName: 'Last Name is required.'}));
      valid = false;
    }
    if (!city) {
      setErrors(prev => ({...prev, city: 'City is required.'}));
      valid = false;
    }
    if (!password) {
      setErrors(prev => ({...prev, password: 'Password is required.'}));
      valid = false;
    }

    if (valid) {
      setSnackbarMessage('Signup successful!');
      setSnackbarVisible(true);
    } else {
      setSnackbarMessage('Please fill all mandatory fields.');
      setSnackbarVisible(true);
    }
  }, [username, firstName, lastName, city, password]);

  const onDismissSnackbar = useCallback(() => {
    setSnackbarVisible(false);
  }, []);

  return (
    <View style={signupStyles.container}>
      <Title>Sign Up</Title>
      <TextInput
        label="Username*"
        value={username}
        onChangeText={setUsername}
        style={signupStyles.input}
        mode="outlined"
      />
      {errors.username ? (
        <Text style={signupStyles.error}>{errors.username}</Text>
      ) : null}

      <TextInput
        label="First Name*"
        value={firstName}
        onChangeText={setFirstName}
        style={signupStyles.input}
        mode="outlined"
      />
      {errors.firstName ? (
        <Text style={signupStyles.error}>{errors.firstName}</Text>
      ) : null}

      <TextInput
        label="Last Name*"
        value={lastName}
        onChangeText={setLastName}
        style={signupStyles.input}
        mode="outlined"
      />
      {errors.lastName ? (
        <Text style={signupStyles.error}>{errors.lastName}</Text>
      ) : null}

      <TextInput
        label="City*"
        value={city}
        onChangeText={setCity}
        style={signupStyles.input}
        mode="outlined"
      />
      {errors.city ? <Text style={signupStyles.error}>{errors.city}</Text> : null}

      <TextInput
        label="Password*"
        value={password}
        onChangeText={setPassword}
        style={signupStyles.input}
        mode="outlined"
        secureTextEntry
      />
      {errors.password ? (
        <Text style={signupStyles.error}>{errors.password}</Text>
      ) : null}

      <Button
        mode="contained"
        onPress={handleSignup}
        style={signupStyles.button}>
        Sign Up
      </Button>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={onDismissSnackbar}
        duration={2000}>
        {snackbarMessage}
      </Snackbar>
    </View>
  );
};

export default SignupScreen;
