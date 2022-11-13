import React from 'react';
import { SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { AnimatedBox, Box } from '@/atoms';
import FeatherIcon from './icon';

interface Props {
  progress: Readonly<SharedValue<number>>;
}

const NoteActionView: React.FC<Props> = ({ progress }) => {
  const iconStye = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: progress.value,
        },
      ],
    };
  });
  return (
    <Box
      flex={1}
      bg="$primary"
      flexDirection={'row'}
      alignItems="center"
      justifyContent={'flex-end'}
      pr="xl"
    >
      <AnimatedBox
        flexDirection={'row'}
        alignItems={'center'}
        style={iconStye}
        justifyContent="center"
      >
        <FeatherIcon name="folder" color="white" size={18}></FeatherIcon>
        <FeatherIcon name="arrow-right" color="white" size={12}></FeatherIcon>
      </AnimatedBox>
    </Box>
  );
};

export default NoteActionView;
