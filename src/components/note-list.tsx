import { NotesData } from '@/fixtures/notes';
import { INote } from '@/lib/interfaces/main.interface';
import { Theme } from '@/themes';
import { createBox } from '@shopify/restyle';
import React from 'react';
import { FlatListProps } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import SingleNote from './note';

const StyledFlatList = createBox<Theme, FlatListProps<INote>>(FlatList);

interface Props {}

const NoteList: React.FC<Props> = () => {
  const renderNote = React.useCallback(({ item }: { item: INote }) => {
    return <SingleNote {...item}></SingleNote>;
  }, []);
  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior="automatic"
      data={NotesData}
      renderItem={renderNote}
      keyExtractor={item => item.id}
      width="100%"
    ></StyledFlatList>
  );
};

export default NoteList;
