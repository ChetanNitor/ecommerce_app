import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import {navigationRef} from './navigationService';
import SignupScreen from '../screens/SignupScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
    <TabStack.Navigator
      screenOptions={({route}: any) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string;

          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else {
            iconName = 'help-outline'; // Default icon if route is not recognized
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {display: 'flex'}, // Ensure the tab bar is displayed
      })}>
      <TabStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: true, title: 'Home'}}
      />
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
        <MainStack.Screen
          name="TabStackParamList"
          component={tabbarStack}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
