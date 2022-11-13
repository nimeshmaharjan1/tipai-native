import React from 'react';
import { Theme } from '@/themes';

import { StatusBar as NativeStatusBar } from 'react-native';
import { useTheme } from '@shopify/restyle';

const StatusBar = () => {
  const theme = useTheme<Theme>();

  return (
    <NativeStatusBar
      animated={true}
      backgroundColor={theme.colors.$windowBackground || 'white'}
      barStyle={theme.statusBar?.barStyle}
    ></NativeStatusBar>
  );
};

export default StatusBar;
