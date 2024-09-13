import {ImageSourcePropType} from 'react-native';

type AppStackParamList = {
  PokemonList: {};
  PokemonDetails: {
    image: ImageSourcePropType;
    detailsUri: string;
  };
};

export type {AppStackParamList};
