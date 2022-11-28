import React from 'react';

import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useColorScheme } from 'nativewind';

const HomeScreen = () => {
  const { toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView className="px-4 py-2 container dark:bg-slate-800 flex-1 items-center justify-center">
      <Pressable onPress={toggleColorScheme} className="bg-slate-200 active:bg-amber-400 px-4 py-2 rounded shadow-xl">
        <Text className="dark:text-red-500 font-bold">Toggle</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;
