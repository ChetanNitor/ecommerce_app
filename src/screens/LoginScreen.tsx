// Login.tsx
import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {Button, Snackbar, TextInput, Title} from 'react-native-paper';
import loginStyles from './LoginStyle';
import {navigate} from '../router/navigationService';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');

  const handleLogin = useCallback(() => {
    // Perform login logic
    if (username && password) {
      // Simulate a successful login (replace with actual login logic)
      setSnackbarMessage('Login successful!');
      setSnackbarVisible(true);
      navigate('TabStackParamList');
    } else {
      setSnackbarMessage('Please enter both username and password.');
      setSnackbarVisible(true);
    }
  }, [username, password]);

  const handleSignup = useCallback(() => {
    navigate('SignupScreen');
  }, []);

  const handleForgotPassword = useCallback(() => {
    // Handle forgot password logic
    setSnackbarMessage('Navigating to forgot password...');
    setSnackbarVisible(true);
  }, []);

  const onDismissSnackbar = useCallback(() => {
    setSnackbarVisible(false);
  }, []);

  return (
    <View style={loginStyles.container}>
      <Title>Login</Title>
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={loginStyles.input}
        mode="outlined"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        style={loginStyles.input}
        mode="outlined"
        secureTextEntry
      />
      <Button mode="contained" onPress={handleLogin} style={loginStyles.button}>
        Login
      </Button>
      <Button mode="outlined" onPress={handleSignup} style={loginStyles.button}>
        Sign Up
      </Button>
      <Button
        mode="text"
        onPress={handleForgotPassword}
        style={loginStyles.button}>
        Forgot Password?
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

export default LoginScreen;
