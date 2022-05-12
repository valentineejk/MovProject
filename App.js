/* eslint-disable prettier/prettier */
//import liraries
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

// create a component
const App=() => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  );
};

// define your styles
const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8DC7E5',
  },
});

//make this component available to the app
export default App;
