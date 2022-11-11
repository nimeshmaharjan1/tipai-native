import React from 'react';

import { Container } from '@/atoms';
import NoteList from '@/components/note-list';
import HeaderBar from '@/components/header-bar';
import FeatherIcon from '@/components/icon';

const Main = () => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <NoteList></NoteList>
      <HeaderBar>
        <FeatherIcon name="menu" size={22}></FeatherIcon>
        <FeatherIcon name="more-vertical" size={22}></FeatherIcon>
      </HeaderBar>
    </Container>
  );
};

export default Main;
