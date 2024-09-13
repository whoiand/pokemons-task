import {ImageSourcePropType, ViewStyle} from 'react-native';

type PokemonCardProps = {
  style?: ViewStyle;
  onPress: () => void;
  pokemonName: PokemonBase['name'];
  image: ImageSourcePropType;
};

export type {PokemonCardProps};
