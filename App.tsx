import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Resultado from './componentes/resultado';

export default function App() {
  const ejercicioDiario = [3, 0, 2, 4.5, 0, 4, 5];
  const objetivo = 2;
  
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Resultado ejercicioDiario={ejercicioDiario} objetivo={objetivo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,

  }
});
