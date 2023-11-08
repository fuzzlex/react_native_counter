import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <View style={styles.container} >
    <Navbar   />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111111',
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },

});
