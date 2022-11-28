import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import React from 'react';

import { store } from './store';
import { ColorSchemes } from './shared/enums';

import { Provider } from 'react-redux';
import MainLayout from './shared/layouts/main';

export default function App() {
  const { colorScheme, setColorScheme } = useColorScheme();

  React.useEffect(() => {
    setColorScheme('dark');
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainLayout></MainLayout>
        <StatusBar style={`${colorScheme === ColorSchemes.DARK ? 'dark' : 'light'}`} />
      </NavigationContainer>
    </Provider>
  );
}
