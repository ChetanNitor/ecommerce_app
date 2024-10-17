import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {navigate} from '../router/navigationService';

const SplashScreen: React.FC = () => {
  useEffect(() => {
    // Set a 30-second delay before navigating to LoginScreen
    const timer = setTimeout(() => {
      navigate('LoginScreen');
    }, 30000); // 30 seconds in milliseconds

    // Cleanup the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to MyApp</Text>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SplashScreen;
