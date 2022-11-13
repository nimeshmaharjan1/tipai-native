import React from 'react';

import { SvgProps } from 'react-native-svg';

import LogoSvg from '@/assets/logo.svg';
import { ColorProps, useResponsiveProp, useTheme } from '@shopify/restyle';
import { Theme } from '@/themes';

type Props = Omit<SvgProps, 'color'> & ColorProps<Theme>;

const Logo: React.FC<Props> = ({ color = '$foreground', ...rest }) => {
  const theme = useTheme<Theme>();
  const colorProp = useResponsiveProp(color);
  const vColor = theme.colors[colorProp || '$foreground'];
  return <LogoSvg {...rest} color={vColor}></LogoSvg>;
};

export default Logo;
