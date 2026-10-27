import { View, Text, StyleSheet } from 'react-native';

type ResultadoProps = {
  ejercicioDiario: number[];
  objetivo: number;
};

export default function Resultado({ ejercicioDiario, objetivo }: ResultadoProps) {
  const periodoLength = ejercicioDiario.length;
  const diasEntrenamiento = ejercicioDiario.filter((dia) => dia > 0).length;
  const horasTotales = ejercicioDiario.reduce((total, dia) => total + dia, 0);
  const promedio = periodoLength > 0 ? horasTotales / periodoLength : 0;
  const success = promedio >= objetivo;

  let calificacion = 1;
  let descripcion = '...tómalo en serio, tú puedes!';

  if (success) {
    calificacion = 3;
    descripcion = '¡Excelente, has cumplido tu objetivo!';
  } else if (promedio >= objetivo * 0.7) {
    calificacion = 2;
    descripcion = 'Bien, pero podrías mejorar.';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rutina semanal: </Text>
      <Text style={styles.text}>Días de ejercicio: {ejercicioDiario.join(', ')}</Text>
      <Text style={styles.title}>Resultados del Ejercicio</Text>
      <Text style={styles.text}>Días del periodo: {periodoLength}</Text>
      <Text style={styles.text}>Días entrenados: {diasEntrenamiento}</Text>
      <Text style={styles.text}>Meta diaria: {objetivo}</Text>
      <Text style={styles.text}>Promedio: {promedio.toFixed(2)}</Text>
      <Text style={styles.text}>¿Se cumplió la meta?: {success ? 'Sí' : 'No'}</Text>
      <Text style={styles.text}>Calificación: {calificacion}</Text>
      <Text style={styles.text}>Descripción: {descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});