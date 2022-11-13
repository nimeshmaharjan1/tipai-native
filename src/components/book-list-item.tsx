import React from 'react';

import { IBook } from '@/lib/interfaces/main.interface';
import { ColorProps } from '@shopify/restyle';
import { Theme } from '@/themes';
import { Text, TouchableOpacity } from '@/atoms';

export type ListItemProps = IBook &
  ColorProps<Theme> & {
    onPress: (bookId: string) => void;
  };

const BookListItem: React.FC<ListItemProps> = ({
  id,
  name,
  onPress,
  color,
}) => {
  const handlePress = React.useCallback(() => onPress(id), [id]);
  return (
    <TouchableOpacity px="lg" py="sm" onPress={handlePress}>
      <Text
        ellipsizeMode="tail"
        numberOfLines={1}
        mb="xs"
        color={color || '$sidebarForeground'}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default BookListItem;
