import React, { useImperativeHandle } from 'react';

import RNBottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import BottomSheet from './bottom-sheet';
import { Box, Text } from '@/atoms';

import BookList from './book-list';

interface Props {
  onClose?: () => void;
}

interface MoveNoteSheetHandle {
  show: () => void;
}

const MoveNoteSheetHandle = React.forwardRef<MoveNoteSheetHandle, Props>(
  ({ onClose }, ref) => {
    const refBottomSheet = React.useRef<RNBottomSheet>(null);
    const snapPoints = React.useMemo(() => ['60%', '90%'], []);
    useImperativeHandle(ref, () => {
      return {
        show: () => {
          const { current: bottomSheet } = refBottomSheet;
          if (bottomSheet) {
            bottomSheet.snapToIndex(0);
          }
        },
      };
    });

    const handlePressItem = React.useCallback((_bookId: string) => {
      const { current: bottomSheet } = refBottomSheet;
      if (bottomSheet) {
        bottomSheet.close();
      }
    }, []);

    return (
      <BottomSheet
        ref={refBottomSheet}
        index={-1}
        snapPoints={snapPoints}
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          />
        )}
        detached={true}
        bottomInset={46}
        enablePanDownToClose
        style={{ marginHorizontal: 12 }}
        onClose={onClose}
      >
        <BookList
          inBottomSheet
          onPressItem={handlePressItem}
          color="$foreground"
          headerComponent={() => (
            <Box justifyContent="center" alignItems="center">
              <Text fontWeight="bold">Move</Text>
            </Box>
          )}
        ></BookList>
      </BottomSheet>
    );
  }
);

export type MoveNoteSheet = MoveNoteSheetHandle;

export default MoveNoteSheetHandle;
