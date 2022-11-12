import React from 'react';

import { Box, Container, Text, TouchableOpacity } from '@/atoms';

import NoteList from '@/components/note-list';
import HeaderBar from '@/components/header-bar';
import FeatherIcon from '@/components/icon';

import { CompositeScreenProps } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { HomeDrawerParamsList, RootStackParamList } from '@/navs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamsList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>;

const Main: React.FC<Props> = ({ navigation }) => {
  const handleSideBarToggle = React.useCallback(() => {
    navigation.toggleDrawer();
  }, [navigation]);
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <NoteList></NoteList>
      <HeaderBar>
        <TouchableOpacity
          m="xs"
          p="xs"
          isRippleBorderless
          onPress={handleSideBarToggle}
        >
          <FeatherIcon name="menu" size={22}></FeatherIcon>
        </TouchableOpacity>
        <Box flex={1} alignItems={'center'}>
          <Text fontWeight={'bold'}>All Notes</Text>
        </Box>
        <TouchableOpacity m="xs" p="xs" isRippleBorderless>
          <FeatherIcon name="more-vertical" size={22}></FeatherIcon>
        </TouchableOpacity>
      </HeaderBar>
    </Container>
  );
};

export default Main;
