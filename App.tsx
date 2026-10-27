import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import resultado from './componentes/resultado';
import calculo from './componentes/calculo';

export default function App() {
  const ejercicioDiario = [3, 0, 2, 4.5, 0, 4, 5];
  const objetivo = 2;

  const resultado = calculo(ejercicioDiario, objetivo);
  return (
    <View style={styles.container}>
      <Text>Esta es mi app de ejercicios!</Text>
      <StatusBar style="auto" />
      <resultado resultado={}></resultado>
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
