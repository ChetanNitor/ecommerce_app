import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/Login';
import {navigationRef} from './navigationService';

// Define types for navigation parameters
type LoginStackParamList = {
  LoginScreen: undefined;
  // Details: {itemId: number};
};

type MainStackParamList = {
  LoginStackParamList: undefined;
  // LoginScreen: undefined;
  // Details: {itemId: number};
};

// Create Stack Navigator
const MainStack = createNativeStackNavigator<MainStackParamList>();
const PrimaryStack = createNativeStackNavigator<LoginStackParamList>();

const loginStack = () => {
  return (
    <PrimaryStack.Navigator initialRouteName="LoginScreen">
      <PrimaryStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </PrimaryStack.Navigator>
  );
};

const Router: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator initialRouteName="LoginStackParamList">
        <MainStack.Screen
          name="LoginStackParamList"
          component={loginStack}
          options={{headerShown: false}}
        />
        {/* <MainStack.Screen name="LoginScreen" component={LoginScreen} /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
