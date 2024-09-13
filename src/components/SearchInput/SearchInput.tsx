import React from 'react';
import {TextInput} from 'react-native';
import {useStyles} from './SearchInput.styles';

const SearchInput = ({onChange, value, style}) => {
  const styles = useStyles();

  return (
    <TextInput
      style={[styles.input, style]}
      onChangeText={onChange}
      value={value}
      placeholder="Search"
      autoCapitalize="none"
    />
  );
};

export default SearchInput;
