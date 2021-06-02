import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import Hello from './Components/HelloComponent'
import Main from './Components/MainComponent';

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
const store = ConfigureStore();

// export default function App() {
//   return (
//     <Hello name='QuanNda' />
//   );
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Main />
    </Provider>
    );
  }
}
export default App;