import React from 'react';

import { useAtom } from 'jotai';
import activeThemeId from '@/states/theme';

import RNBottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import ThemeListItem from './theme-list-item';
import BottomSheet from '../bottom-sheet';
import { Box, Text } from '@/atoms';
import { ThemeMeta, themes } from '@/themes';

interface Props {}
interface ThemePickerHanlde {
  show: () => void;
}

const ThemePicker = React.forwardRef<ThemePickerHanlde, Props>(
  (_props, ref) => {
    const [, setActiveTheme] = useAtom(activeThemeId);
    const refBottomSheet = React.useRef<RNBottomSheet>(null);
    const snapPoints = React.useMemo(() => ['40%', '90%'], []);
    React.useImperativeHandle(ref, () => ({
      show: () => {
        const { current: bottomSheet } = refBottomSheet;
        if (bottomSheet) {
          bottomSheet.snapToIndex(0);
        }
      },
    }));

    const renderThemeItem = React.useCallback(({ item }: any) => {
      return (
        <ThemeListItem theme={item} onPress={setActiveTheme}></ThemeListItem>
      );
    }, []);

    return (
      <BottomSheet
        ref={refBottomSheet}
        index={-1}
        snapPoints={snapPoints}
        backgroundComponent={props => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          ></BottomSheetBackdrop>
        )}
        detached
        bottomInset={46}
        enablePanDownToClose
        style={{ marginHorizontal: 12 }}
      >
        <BottomSheetFlatList
          ListHeaderComponent={() => {
            return (
              <Box p="lg" alignItems="center">
                <Text fontWeight="bold">Change Theme</Text>
              </Box>
            );
          }}
          data={themes}
          keyExtractor={(t: ThemeMeta) => t.id}
          renderItem={renderThemeItem}
        ></BottomSheetFlatList>
      </BottomSheet>
    );
  }
);

type ThemePicker = ThemePickerHanlde;

export default ThemePicker;
