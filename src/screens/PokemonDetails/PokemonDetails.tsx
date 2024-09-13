import React, {FC, useEffect, useMemo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PokemonDetailsProps} from './PokemonDetails.types';
import {useStyles} from './PokemonDetails.styles';
import {Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {AppState, fetchPokemon, useAppDispatch} from '@store';
import {ScrollView} from 'react-native-gesture-handler';

const PokemonDetails: FC<PokemonDetailsProps> = ({
  route: {
    params: {image, detailsUri},
  },
}) => {
  const styles = useStyles();

  const dispatch = useAppDispatch();
  const {
    pokemonEntityReducer: {data: pokemonEntity, loading: isPokemonLoading},
  } = useSelector((state: AppState) => state);

  useEffect(() => {
    dispatch(fetchPokemon(detailsUri));
  }, [dispatch, detailsUri]);

  const isPokemonLoaded = !isPokemonLoading && pokemonEntity;

  const pokemonTypes = useMemo(
    () => (Array.isArray(pokemonEntity?.types) ? pokemonEntity.types : []),
    [pokemonEntity?.types],
  );

  const typesString = useMemo(
    () =>
      isPokemonLoaded
        ? pokemonTypes.map(({type}) => `${type.name}`).join(', ')
        : '',
    [isPokemonLoaded, pokemonTypes],
  );

  const statsData = useMemo(
    () =>
      isPokemonLoaded
        ? pokemonEntity.stats.map(({stat: {name}, base_stat}) => ({
            label: name.toUpperCase(),
            value: `${base_stat}`,
          }))
        : [],
    [isPokemonLoaded, pokemonEntity],
  );

  const mainProperties = isPokemonLoaded
    ? [
        {label: 'Id', value: pokemonEntity.id},
        {label: 'Types', value: typesString},
      ]
    : [];

  const basicProperties = isPokemonLoaded
    ? [
        {label: 'Height', value: pokemonEntity.height},
        {label: 'Wight', value: pokemonEntity.weight},
        {label: 'Base exp', value: pokemonEntity.base_experience},
      ]
    : [];

  return (
    <ScrollView style={styles.container}>
      {!isPokemonLoading && pokemonEntity && (
        <>
          <View style={styles.rowContainer}>
            <Image source={image} style={styles.image} />
            <View>
              <Text numberOfLines={1} style={styles.nameText}>
                {pokemonEntity.name}
              </Text>
              {mainProperties.map(({label, value}, index) => (
                <Text style={styles.textWrapper} key={label + index}>
                  <Text style={styles.labelText}>{`${label}: `}</Text>
                  <Text style={styles.valueText}>{value}</Text>
                </Text>
              ))}
            </View>
          </View>
          {basicProperties.map(({label, value}, index) => (
            <Text style={styles.textWrapper} key={label + index}>
              <Text style={styles.labelText}>{`${label}: `}</Text>
              <Text style={styles.valueText}>{value}</Text>
            </Text>
          ))}
          <Text style={styles.labelText}>Stats:</Text>
          {statsData.map(({label, value}, index) => (
            <Text style={styles.textWrapper} key={label + index}>
              <Text style={styles.valueText}>{`${label}: `}</Text>
              <Text style={styles.valueText}>{value}</Text>
            </Text>
          ))}
        </>
      )}
    </ScrollView>
  );
};

export default PokemonDetails;
