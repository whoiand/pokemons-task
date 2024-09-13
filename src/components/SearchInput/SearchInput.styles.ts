import {theme} from '@theme';
import {StyleSheet} from 'react-native';

const useStyles = () =>
  StyleSheet.create({
    input: {
      backgroundColor: theme.color.linkWater,
      borderRadius: 16,
      fontSize: 20,
      height: 46,
      paddingHorizontal: 20,
      color: theme.color.ebonyClay,
      fontWeight: '500',
    },
  });

export {useStyles};
