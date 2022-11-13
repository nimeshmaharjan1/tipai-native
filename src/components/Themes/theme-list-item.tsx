import React from 'react';
import { ThemeMeta, ThemeNames } from '@/themes';

import { useAtom } from 'jotai';
import { selectAtom } from 'jotai/utils';
import activeThemeId from '@/states/theme';
import { Box, Text, TouchableOpacity } from '@/atoms';
import FeatherIcon from '../icon';

interface Props {
  theme: ThemeMeta;
  onPress: (themeId: ThemeNames) => void;
}

const ThemeListItem: React.FC<Props> = ({ theme, onPress }) => {
  const [isActive] = useAtom(
    React.useMemo(() => selectAtom(activeThemeId, v => v === theme.id), [theme])
  );
  const handlePress = React.useCallback(() => {
    onPress(theme.id);
  }, [onPress, theme]);
  return (
    <TouchableOpacity
      minHeight={44}
      flexDirection="row"
      alignItems={'center'}
      px="lg"
      onPress={handlePress}
    >
      <Box alignItems={'center'} justifyContent="center" width={32}>
        {isActive ? (
          <FeatherIcon size={20} name="check" color="$primary"></FeatherIcon>
        ) : null}
      </Box>
      <Text>{theme.name}</Text>
    </TouchableOpacity>
  );
};

export default ThemeListItem;
