import React from 'react';
import { INote } from '@/lib/interfaces/main.interface';
import { Box, Text } from '@/atoms';

export interface NoteProps extends INote {}

const Note: React.FC<NoteProps> = props => {
  return (
    <Box bg="$background">
      <Box bg="$background" px="lg" py="sm">
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
      </Box>
    </Box>
  );
};

export default Note;
