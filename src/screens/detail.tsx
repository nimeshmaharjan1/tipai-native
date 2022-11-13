import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navs';
import { Box, Text, TouchableOpacity } from '@/atoms';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <Box flex={1} alignItems="center" justifyContent={'center'}>
      <Text>Detail Screen</Text>
      <Text m="lg">{JSON.stringify(route.params)}</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ padding: 12 }}
      >
        <Text>Go Back</Text>
      </TouchableOpacity>
    </Box>
  );
};

export default DetailScreen;
