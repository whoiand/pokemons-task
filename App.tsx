import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from '@store';
import {AppStack} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <GestureHandlerRootView>
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <AppStack />
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  </GestureHandlerRootView>
);

export default App;
