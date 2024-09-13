import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useStyles} from './PokemonList.styles';
import {useSelector} from 'react-redux';
import {AppState, fetchPokemonBaseList, useAppDispatch} from '@store';
import {PokemonCard, SearchInput} from '@components';
import * as PokemonImages from '@assets';
import {AppStackParamList} from '@navigation';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {useNavigation} from '@react-navigation/native';
import {useDebounce} from '@hooks';

const pokemonImages = Object.values(PokemonImages);

const PokemonList = () => {
  const styles = useStyles();

  const [searchInputValue, setSearchInputValue] = useState('');
  const debouncedSearchValue = useDebounce(searchInputValue);

  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const dispatch = useAppDispatch();
  const dataState = useSelector((state: AppState) => state);

  const pokemonListData = useMemo(
    () =>
      Array.isArray(dataState.pokemonBaseList.data)
        ? dataState.pokemonBaseList.data
        : [],
    [dataState.pokemonBaseList.data],
  );

  const isLoading = dataState.pokemonBaseList.loading;

  const pokemonList = useMemo(
    () =>
      debouncedSearchValue
        ? pokemonListData.filter(({name}) =>
            name.toLowerCase().includes(debouncedSearchValue.toLowerCase()),
          )
        : pokemonListData,
    [pokemonListData, debouncedSearchValue],
  );

  useEffect(() => {
    dispatch(fetchPokemonBaseList());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Pokedex</Text>
      <SearchInput
        value={searchInputValue}
        onChange={setSearchInputValue}
        style={styles.input}
      />
      {!isLoading && Array.isArray(pokemonList) && (
        <FlatList
          ListEmptyComponent={
            <Text style={styles.emptyStateText}>No items found</Text>
          }
          contentContainerStyle={styles.scrollableContentContainer}
          data={pokemonList}
          keyExtractor={({name}, index) => `${name}${index}`}
          renderItem={({item, index}) => {
            const pokemonImageSource = pokemonImages[index];

            const pokemonName = `${index + 1}. ${item.name}`;

            const handleCardPress = () => {
              navigation.navigate('PokemonDetails', {
                image: pokemonImageSource,
                detailsUri: item.url,
              });
            };

            return (
              <PokemonCard
                style={styles.pokemonCard}
                onPress={handleCardPress}
                pokemonName={pokemonName}
                image={pokemonImageSource}
              />
            );
          }}
        />
      )}
    </View>
  );
};

export default PokemonList;
