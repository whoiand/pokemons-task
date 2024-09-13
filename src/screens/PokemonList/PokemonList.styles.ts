import {theme} from '@theme';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const useStyles = () => {
  const {top: safeAreaTopInset, bottom: safeAreaBottomInset} =
    useSafeAreaInsets();

  return StyleSheet.create({
    input: {margin: 16},
    container: {
      flex: 1,
      backgroundColor: theme.color.anakiwa,
      paddingTop: safeAreaTopInset,
    },
    pokemonCard: {marginHorizontal: 16, marginVertical: 8},
    scrollableContentContainer: {
      marginBottom: safeAreaBottomInset,
    },
    emptyStateText: {marginTop: 40, textAlign: 'center', fontWeight: '500'},
    headingText: {
      textAlign: 'center',
      marginVertical: 20,
      fontWeight: '700',
      color: theme.color.linkWater,
      fontSize: 40,
    },
  });
};

export {useStyles};
