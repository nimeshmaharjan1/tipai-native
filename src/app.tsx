import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Navigations from './navs';
import { ThemeProvider } from '@shopify/restyle';

import StatusBar from '@/components/status-bar';
import { activeThemeAtom } from './states/theme';

import { useAtom } from 'jotai';

const App = () => {
  const [activeTheme] = useAtom(activeThemeAtom);
  return (
    <NavigationContainer>
      <ThemeProvider theme={activeTheme}>
        <StatusBar></StatusBar>
        <Navigations></Navigations>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
