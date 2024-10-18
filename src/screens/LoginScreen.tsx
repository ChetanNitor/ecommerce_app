import {Button, Input, Text} from '@rneui/themed';
import {Formik} from 'formik';
import React from 'react';
import {Alert, KeyboardAvoidingView, Platform, View} from 'react-native';
import * as Yup from 'yup';
import {navigate, replace} from '../router/navigationService';
import styles from './LoginScreen.styles';

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const LoginScreen: React.FC = () => {
  const handleLogin = (values: {username: string; password: string}) => {
    Alert.alert(
      'Login',
      `Username: ${values.username}, Password: ${values.password}`,
    );
    replace('TabStackParamList');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.innerContainer}>
        <Text h3 style={styles.title}>
          Login
        </Text>
        <Formik
          initialValues={{username: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={handleLogin}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <Input
                placeholder="Username"
                leftIcon={{type: 'font-awesome', name: 'user'}}
                value={values.username}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                autoCapitalize="none"
                autoComplete="username"
                keyboardType="email-address"
                containerStyle={styles.inputContainer}
                errorStyle={{color: 'red'}}
                errorMessage={
                  touched.username && errors.username ? errors.username : ''
                }
              />
              <Input
                placeholder="Password"
                leftIcon={{type: 'font-awesome', name: 'key'}}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry
                autoCapitalize="none"
                autoComplete="password"
                containerStyle={styles.inputContainer}
                errorStyle={{color: 'red'}}
                errorMessage={
                  touched.password && errors.password ? errors.password : ''
                }
              />

              <Button
                title="Login"
                onPress={() => handleSubmit()}
                buttonStyle={styles.loginButton}
                containerStyle={styles.buttonContainer}
              />

              <Button
                title="Forgot Password?"
                type="clear"
                onPress={() =>
                  Alert.alert(
                    'Forgot Password',
                    'Redirecting to password recovery...',
                  )
                }
                titleStyle={styles.forgotPasswordText}
              />

              <Button
                title="Sign Up"
                type="outline"
                onPress={() => navigate('SignupScreen')}
                buttonStyle={styles.signupButton}
                containerStyle={styles.buttonContainer}
              />
            </>
          )}
        </Formik>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
