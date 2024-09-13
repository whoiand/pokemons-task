import {theme} from '@theme';
import {StyleSheet} from 'react-native';

const useStyles = () =>
  StyleSheet.create({
    container: {
      padding: 16,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      borderRadius: 16,
      backgroundColor: theme.color.ebonyClay,
    },
    text: {
      fontSize: 20,
      color: theme.color.linkWater,
    },
    image: {
      width: 40,
      aspectRatio: 1,
      marginRight: 20,
    },
  });

export {useStyles};
