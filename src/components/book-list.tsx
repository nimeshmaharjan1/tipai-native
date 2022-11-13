import { FlatListProps, FlatList } from 'react-native';
import React from 'react';
import { ColorProps, createBox } from '@shopify/restyle';
import { Theme } from '@/themes';
import { IBook } from '@/lib/interfaces/main.interface';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import BookListItem from './book-list-item';
import { BooksData } from '@/fixtures/books';

const StyledFlatList = createBox<Theme, FlatListProps<IBook>>(FlatList);

const StyledBottomSheetFlastList = createBox<Theme, FlatListProps<IBook>>(
  BottomSheetFlatList
);

type Props = {
  inBottomSheet?: boolean;
  onPressItem?: (bookId: string) => void;
  headerComponent?: React.FC<any>;
} & ColorProps<Theme>;

const Books: React.FC<Props> = ({
  onPressItem,
  headerComponent,
  color,
  inBottomSheet,
}) => {
  const renderItem = React.useCallback(
    ({ item }) => {
      return (
        <BookListItem
          {...item}
          onPress={onPressItem}
          color={color}
        ></BookListItem>
      );
    },
    [onPressItem]
  );
  const ListComponent = inBottomSheet
    ? StyledBottomSheetFlastList
    : StyledFlatList;
  return (
    <ListComponent
      contentInsetAdjustmentBehavior="automatic"
      scrollEventThrottle={16}
      data={BooksData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      width={'100%'}
      ListHeaderComponent={headerComponent}
    />
  );
};

export default Books;
