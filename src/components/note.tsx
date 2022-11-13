import React from 'react';
import { INote } from '@/lib/interfaces/main.interface';
import { Box, Text, TouchableOpacity } from '@/atoms';
import NoteActionView from './note-list-item-action-view';
import SwipeableView, { BackViewProps } from './swipeable-view';

export interface ListItemProps extends INote {
  onPress: (noteId: string) => void;
  onSwipeLeft?: (noteId: string, done: () => void) => void;
}

const Note: React.FC<ListItemProps> = props => {
  const { onPress, onSwipeLeft, id } = props;
  const handlePress = React.useCallback(() => {
    onPress(id);
  }, [onPress, id]);
  const handleSwipeLeft = React.useCallback(
    (done: () => void) => {
      onSwipeLeft && onSwipeLeft(id, done);
    },
    [id, onSwipeLeft]
  );
  const renderBackView = React.useCallback(
    ({ progress }: BackViewProps) => <NoteActionView progress={progress} />,
    []
  );
  return (
    <SwipeableView
      bg="yellow"
      onSwipeLeft={handleSwipeLeft}
      backView={renderBackView}
    >
      <Box bg="$background">
        <TouchableOpacity
          bg="$background"
          px="lg"
          py="sm"
          onPress={handlePress}
        >
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            fontWeight={'bold'}
            mb="xs"
          >
            {props.title}
          </Text>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            fontSize={14}
            opacity={0.7}
            textAlign="justify"
          >
            {props.body}
          </Text>
        </TouchableOpacity>
      </Box>
    </SwipeableView>
  );
};

export default Note;
