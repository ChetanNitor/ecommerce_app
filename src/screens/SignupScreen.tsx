import {Picker} from '@react-native-picker/picker';
import {Icon} from '@rneui/base';
import {Button, Input, Text} from '@rneui/themed';
import {Formik} from 'formik';
import React from 'react';
import {Alert, KeyboardAvoidingView, Platform, View} from 'react-native';
import * as Yup from 'yup';
import styles from './SignupScreen.styles';

// Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  city: Yup.string().required('City is required'),
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const SignupScreen: React.FC = () => {
  const handleSignup = (values: {
    firstName: string;
    lastName: string;
    city: string;
    username: string;
    password: string;
  }) => {
    Alert.alert(
      'Signup',
      `First Name: ${values.firstName}, Last Name: ${values.lastName}, City: ${values.city}, Username: ${values.username}, Password: ${values.password}`,
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.innerContainer}>
        <Text h3 style={styles.title}>
          Sign Up
        </Text>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            city: '',
            username: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSignup}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <>
              {/* First Name Input */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>First Name</Text>
                <Input
                  placeholder="First Name"
                  inputStyle={styles.inputField}
                  leftIcon={{type: 'font-awesome', name: 'user'}}
                  value={values.firstName}
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  errorStyle={styles.errorText}
                  errorMessage={
                    touched.firstName && errors.firstName
                      ? errors.firstName
                      : ''
                  }
                  autoCorrect={false}
                  autoComplete="off"
                />
              </View>

              {/* Last Name Input */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Last Name</Text>
                <Input
                  placeholder="Last Name"
                  inputStyle={styles.inputField}
                  leftIcon={{type: 'font-awesome', name: 'user'}}
                  value={values.lastName}
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  errorStyle={styles.errorText}
                  errorMessage={
                    touched.lastName && errors.lastName ? errors.lastName : ''
                  }
                />
              </View>

              {/* City Dropdown */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>City</Text>
                <View style={styles.pickerWrapper}>
                  <Icon
                    name="map-marker"
                    type="font-awesome"
                    size={20}
                    containerStyle={styles.icon}
                  />
                  <Picker
                    selectedValue={values.city}
                    style={styles.picker}
                    onValueChange={itemValue =>
                      setFieldValue('city', itemValue)
                    }>
                    <Picker.Item label="Select City" value="" />
                    <Picker.Item label="New York" value="New York" />
                    <Picker.Item label="Los Angeles" value="Los Angeles" />
                    <Picker.Item label="Chicago" value="Chicago" />
                  </Picker>
                </View>
                {touched.city && errors.city ? (
                  <Text style={styles.errorText}>{errors.city}</Text>
                ) : null}
              </View>

              {/* Username Input */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Username</Text>
                <Input
                  placeholder="Username"
                  inputStyle={styles.inputField}
                  leftIcon={{type: 'font-awesome', name: 'user'}}
                  value={values.username}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  autoCapitalize="none"
                  autoComplete="username"
                  errorStyle={styles.errorText}
                  errorMessage={
                    touched.username && errors.username ? errors.username : ''
                  }
                />
              </View>

              {/* Password Input */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <Input
                  placeholder="Password"
                  inputStyle={styles.inputField}
                  leftIcon={{type: 'font-awesome', name: 'key'}}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry
                  autoCapitalize="none"
                  autoComplete="password"
                  errorStyle={styles.errorText}
                  errorMessage={
                    touched.password && errors.password ? errors.password : ''
                  }
                />
              </View>

              {/* Submit Button */}
              <Button
                title="Submit"
                onPress={() => handleSubmit()}
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

export default SignupScreen;
