import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import {navigationRef} from './navigationService';
import SignupScreen from '../screens/SignupScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

// Define types for navigation parameters
type LoginStackParamList = {
  LoginScreen: undefined;
  SignupScreen: undefined;
  // Details: {itemId: number};
};

type MainStackParamList = {
  LoginStackParamList: undefined;
  TabStackParamList: undefined;
};

type TabStackParamList = {
  HomeScreen: undefined;
};

// Create Stack Navigator
const MainStack = createNativeStackNavigator<MainStackParamList>();
const PrimaryStack = createNativeStackNavigator<LoginStackParamList>();
const TabStack = createBottomTabNavigator<TabStackParamList>();

const loginStack = () => {
  return (
    <PrimaryStack.Navigator initialRouteName="LoginScreen">
      <PrimaryStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <PrimaryStack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{headerShown: true, title: 'Signup'}}
      />
    </PrimaryStack.Navigator>
  );
};

const tabbarStack = () => {
  return (
    <TabStack.Navigator>
      <TabStack.Screen name="HomeScreen" component={HomeScreen} />
      {/* <TabStack.Screen name="Settings" component={SettingsScreen} /> */}
    </TabStack.Navigator>
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
        <MainStack.Screen name="TabStackParamList" component={tabbarStack} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
