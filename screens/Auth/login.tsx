import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
  return (
    <SafeAreaView className="py-4 px-6 dark:bg-neutral-800 flex-1 ">
      <Text className="text-white">LoginScreen</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;
