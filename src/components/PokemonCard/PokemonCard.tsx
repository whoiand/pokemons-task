import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {useStyles} from './PokemonCard.styles';
import {PokemonCardProps} from './PokemonCard.types';

const PokemonCard: React.FC<PokemonCardProps> = ({
  style = {},
  onPress,
  pokemonName,
  image,
}) => {
  const styles = useStyles();

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{pokemonName}</Text>
    </TouchableOpacity>
  );
};

export default PokemonCard;
