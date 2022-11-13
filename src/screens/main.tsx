import React from 'react';

import { Box, Container, Text, TouchableOpacity } from '@/atoms';

import NoteList from '@/components/note-list';
import HeaderBar from '@/components/header-bar';
import FeatherIcon from '@/components/icon';

import { CompositeScreenProps } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { HomeDrawerParamsList, RootStackParamList } from '@/navs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import useStickyHeader from '@/hooks/use-sticky-header';
import MoveNoteSheetHandle, {
  MoveNoteSheet,
} from '@/components/move-note-sheet';
import ThemePicker from '@/components/Themes/theme-picker';

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamsList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>;

const Main: React.FC<Props> = ({ navigation }) => {
  const refThemePicker = React.useRef<ThemePicker>(null);
  const handleMenuToggle = React.useCallback(() => {
    const { current: menu } = refThemePicker;
    if (menu) {
      menu.show();
    }
  }, []);
  const {
    handleNoteListLayout,
    handleScroll,
    headerBarStyle,
    headerBarHeight,
  } = useStickyHeader();

  const refMoveNoteSheet = React.useRef<MoveNoteSheet>(null);

  const [concealNoteListItem, setConcealNoteListItem] =
    React.useState<() => void | null>(null);
  const handleSideBarToggle = React.useCallback(() => {
    navigation.toggleDrawer();
  }, [navigation]);
  const handleNoteListItemPress = React.useCallback((noteId: string) => {
    //TODO later
    navigation.navigate('Detail', {
      noteId,
    });
  }, []);

  const handleNoteListItemSwipeLeft = React.useCallback(
    (_noteId: string, conceal: () => void) => {
      const { current: menu } = refMoveNoteSheet;
      if (menu) {
        menu.show();
        setConcealNoteListItem(() => conceal);
      }
    },
    []
  );

  const handleMoveNoteSheetClose = React.useCallback(() => {
    concealNoteListItem && concealNoteListItem();
    setConcealNoteListItem(null);
  }, [concealNoteListItem]);

  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <NoteList
        onItemPress={handleNoteListItemPress}
        onItemSwipeLeft={handleNoteListItemSwipeLeft}
        contentInsetTop={headerBarHeight}
        onScroll={handleScroll}
      ></NoteList>
      <HeaderBar style={headerBarStyle} onLayout={handleNoteListLayout}>
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
        <TouchableOpacity
          m="xs"
          p="xs"
          isRippleBorderless
          onPress={handleMenuToggle}
        >
          <FeatherIcon name="more-vertical" size={22}></FeatherIcon>
        </TouchableOpacity>
      </HeaderBar>
      <MoveNoteSheetHandle
        ref={refMoveNoteSheet}
        onClose={handleMoveNoteSheetClose}
      ></MoveNoteSheetHandle>
      <ThemePicker ref={refThemePicker}></ThemePicker>
    </Container>
  );
};

export default Main;
