import React from 'react';

import Pressable, { PressableProps } from './pressable';
import { Platform } from 'react-native';

import {
  backgroundColor,
  BackgroundColorProps,
  backgroundColorShorthand,
  BackgroundColorShorthandProps,
  border,
  BorderProps,
  composeRestyleFunctions,
  opacity,
  OpacityProps,
  ResponsiveValue,
  useResponsiveProp,
  useRestyle,
  useTheme,
} from '@shopify/restyle';

import { Theme } from '@/themes';

type RestyleProps = BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  BorderProps<Theme> &
  OpacityProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  backgroundColorShorthand,
  backgroundColor,
  border,
  opacity,
]);

interface Props extends PressableProps {
  pressed?: RestyleProps;
  rippleColor?: ResponsiveValue<keyof Theme['colors'], Theme>;
  isRippleBorderless?: boolean;
}

const Touchable: React.FC<Props> = ({
  pressed,
  rippleColor,
  isRippleBorderless,
  style,
  ...rest
}) => {
  const { style: pressedStyle } = pressed
    ? useRestyle(restyleFunctions, pressed)
    : { style: undefined };
  const theme = useTheme<Theme>();
  const rippleColorProp = rippleColor && useResponsiveProp(rippleColor);
  const rippleColorValue = rippleColorProp && theme.colors[rippleColorProp];
  return (
    <Pressable
      {...rest}
      android_ripple={{
        color: rippleColorValue,
        borderless: isRippleBorderless,
      }}
      // @ts-ignore
      style={({ pressed: isPressed }) => {
        return isPressed ? [style, pressedStyle] : style;
      }}
    ></Pressable>
  );
};

export const TouchableOpacity: React.FC<Props> = props => {
  return (
    <Touchable
      rippleColor={'$foreground'}
      {...props}
      pressed={{
        opacity: Platform.select({ ios: 0.6 }),
      }}
    ></Touchable>
  );
};

export default Touchable;
