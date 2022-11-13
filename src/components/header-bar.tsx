import React from 'react';
import AnimatedBox from '@/atoms/animated-box';
import { Bar } from '@/atoms';

const HeaderBar: React.FC<any> = ({ children, ...rest }) => {
  return (
    <AnimatedBox position={'absolute'} top={6} left={0} right={0} {...rest}>
      <Bar
        mx="lg"
        variant={'headerBar'}
        flexDirection="row"
        alignItems={'center'}
        px="sm"
        minHeight={44}
      >
        {children}
      </Bar>
    </AnimatedBox>
  );
};

export default HeaderBar;
