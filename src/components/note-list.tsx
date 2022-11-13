import { Box } from '@/atoms';
import { NotesData } from '@/fixtures/notes';
import { INote } from '@/lib/interfaces/main.interface';
import { Theme } from '@/themes';
import { createBox } from '@shopify/restyle';
import React from 'react';
import {
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import Animated, { AnimateProps } from 'react-native-reanimated';
import SingleNote from './note';

const StyledFlatList = createBox<Theme, AnimateProps<FlatListProps<INote>>>(
  Animated.FlatList
);

interface Props {
  contentInsetTop: number;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onItemPress: (noteId: string) => void;
  onItemSwipeLeft: (noteId: string, cancel: () => void) => void;
}

const NoteList: React.FC<Props> = ({
  contentInsetTop,
  onScroll,
  onItemPress,
  onItemSwipeLeft,
}) => {
  const renderNote = React.useCallback(({ item }: { item: INote }) => {
    return (
      <SingleNote
        {...item}
        onPress={onItemPress}
        onSwipeLeft={onItemSwipeLeft}
      ></SingleNote>
    );
  }, [onItemPress, onItemSwipeLeft]);
  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior="automatic"
      data={NotesData}
      renderItem={renderNote}
      keyExtractor={item => item.id}
      width="100%"
      {...{ onScroll }}
      scrollEventThrottle={16}
      ListHeaderComponent={<Box width="100%" height={contentInsetTop}></Box>}
    ></StyledFlatList>
  );
};

export default NoteList;
