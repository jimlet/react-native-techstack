import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => (
  <Provider store={createStore(reducers)}>
  {/* Always need flex: 1 to make the thing take up all the space on the screen. */}
    <View style={{ flex: 1 }}>
      <Header headerText="Tech Stack" />
      <LibraryList />
    </View>
  </Provider>
);

export default App;
