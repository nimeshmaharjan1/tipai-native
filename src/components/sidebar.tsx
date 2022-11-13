import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Box, Text } from '@/atoms';
import { SafeAreaView } from 'react-native';
import BookList from './book-list';

import Logo from './Logo';

const Sidebar: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  const handleBookListItemPress = React.useCallback(() => {
    navigation.closeDrawer();
  }, [navigation]);
  return (
    <Box flex={1} bg="$sidebarBackground">
      <SafeAreaView>
        <Box
          alignItems={'flex-start'}
          pl="md"
          pb="sm"
          mt="sm"
          borderBottomColor={'$sidebarSeparator'}
          borderBottomWidth={1}
        >
          <Logo width={128} height={36} color="red"></Logo>
        </Box>
      </SafeAreaView>
      <BookList onPressItem={handleBookListItemPress}></BookList>
    </Box>
  );
};

export default Sidebar;
