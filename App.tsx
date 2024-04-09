import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import QuotesComponent from './src/view/components/QuotesComponent';


function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <QuotesComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  }
});

export default App;
