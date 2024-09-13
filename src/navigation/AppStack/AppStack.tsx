import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PokemonDetails, PokemonList} from '@screens';
import {AppStackParamList} from './AppStack.types';

const Stack = createStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="PokemonList">
      <Stack.Screen
        component={PokemonList}
        options={{headerShown: false}}
        name="PokemonList"
      />
      <Stack.Screen
        component={PokemonDetails}
        name="PokemonDetails"
        options={{
          headerLeftLabelVisible: false,
          headerTransparent: true,
          headerTitleStyle: {
            opacity: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
