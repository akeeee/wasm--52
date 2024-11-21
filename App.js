import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import init, { greet } from "./pkg/hello_wasm"
import { useEffect } from 'react';
export default function App() {
  useEffect(async () => {
    await init().then(() => console.log('GREET', greet()))
  })
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
