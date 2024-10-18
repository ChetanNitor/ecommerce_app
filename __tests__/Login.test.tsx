// Login.test.tsx
import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import LoginScreen from '../src/screens/LoginScreen'; // Adjust the import path as necessary
import {navigate} from '../src/router/navigationService'; // Adjust the import path as necessary

// Mock the navigate function
jest.mock('../router/navigationService', () => ({
  navigate: jest.fn(),
}));

describe('LoginScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock calls before each test
  });

  it('renders correctly', () => {
    const {getByText} = render(<LoginScreen />);
    expect(getByText('Login')).toBeTruthy();
    expect(getByText('Sign Up')).toBeTruthy();
    expect(getByText('Forgot Password?')).toBeTruthy();
  });

  it('shows snackbar message on successful login', async () => {
    const {getByLabelText, getByText} = render(<LoginScreen />);

    // Enter valid credentials
    fireEvent.changeText(getByLabelText('Username'), 'testuser');
    fireEvent.changeText(getByLabelText('Password'), 'password123');

    // Press the login button
    fireEvent.press(getByText('Login'));

    // Wait for snackbar message to be visible
    await waitFor(() => {
      expect(getByText('Login successful!')).toBeTruthy();
    });

    // Check if navigate was called
    expect(navigate).toHaveBeenCalledWith('TabStackParamList');
  });

  it('shows snackbar message on unsuccessful login', async () => {
    const {getByText} = render(<LoginScreen />);

    // Press the login button without entering credentials
    fireEvent.press(getByText('Login'));

    // Wait for snackbar message to be visible
    await waitFor(() => {
      expect(
        getByText('Please enter both username and password.'),
      ).toBeTruthy();
    });

    // Check if navigate was not called
    expect(navigate).not.toHaveBeenCalled();
  });

  it('navigates to signup screen on Sign Up button press', () => {
    const {getByText} = render(<LoginScreen />);

    fireEvent.press(getByText('Sign Up'));

    expect(navigate).toHaveBeenCalledWith('SignupScreen');
  });

  it('shows snackbar message on forgot password', async () => {
    const {getByText} = render(<LoginScreen />);

    fireEvent.press(getByText('Forgot Password?'));

    // Wait for snackbar message to be visible
    await waitFor(() => {
      expect(getByText('Navigating to forgot password...')).toBeTruthy();
    });
  });
});
