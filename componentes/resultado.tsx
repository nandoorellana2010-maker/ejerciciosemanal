import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Resultado({resultado}: {resultado: any}) {

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Resultados del Ejercicio</Text>
      <Text>Días del periodo: {resultado.periodLength}</Text>
      <Text>Días entrenados: {resultado.trainingDays}</Text>
      <Text>Meta diaria: {resultado.target}</Text>
      <Text>Promedio: {resultado.average.toFixed(2)}</Text>
      <Text>¿Se cumplió la meta?: {resultado.success ? "Sí" : "No"}</Text>
      <Text>Calificación: {resultado.rating}</Text>
      <Text>Descripción: {resultado.ratingDescription}</Text>
    </View>
  )
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
});