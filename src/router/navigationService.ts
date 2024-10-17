// NavigationService.ts
import {
  createNavigationContainerRef,
  CommonActions,
} from '@react-navigation/native';

// Create a reference for navigation
export const navigationRef = createNavigationContainerRef<any>();

// Generic navigate function
export function navigate(name: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

// Updated replace function to reset the navigation state
export function replace(name: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0, // Set index to 0 to replace the current screen
        routes: [{name, params}],
      }),
    );
  }
}

// Generic go back function
export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}
