import {theme} from '@theme';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const useStyles = () => {
  const {top: safeAreaTopInset, bottom: safeAreaBottomInset} =
    useSafeAreaInsets();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.color.ebonyClay,
      paddingHorizontal: 16,
      paddingTop: safeAreaTopInset + 70,
      paddingBottom: safeAreaBottomInset + 16,
    },
    rowContainer: {flexDirection: 'row', flexWrap: 'wrap'},
    image: {
      height: 150,
      width: 150,
      borderRadius: 16,
      backgroundColor: theme.color.ebonyClay,
      marginRight: 20,
      marginBottom: 20,
    },
    nameText: {
      fontSize: 24,
      lineHeight: 30,
      color: theme.color.anakiwa,
      fontWeight: '700',
    },
    labelText: {
      fontSize: 20,
      lineHeight: 28,
      color: theme.color.linkWater,
      fontWeight: '600',
    },
    valueText: {
      fontSize: 20,
      lineHeight: 28,
      color: theme.color.silver,
      fontWeight: '500',
    },
    textWrapper: {marginVertical: 5},
  });
};

export {useStyles};
