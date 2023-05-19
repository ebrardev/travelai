import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Welcome the travel Ai Api</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1abc9c',
    color: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',

  },
  Text: {
    color: '#ecf0f1',
    fontSize: 20,
    fontWeight: 'bold',
  },

});
