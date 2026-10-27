import { View, Text } from 'react-native'
import React from 'react'

export default function calculo(ejercicioDiario: number[], objetivo: number) {
    const periodoLength = ejercicioDiario.length;
    const diasEntrenamiento = ejercicioDiario.filter(dia => dia > 0).length;

    const horasTotales = ejercicioDiario.reduce((total, dia) => total+dia, 0);
    const   promedio = horasTotales / periodoLength;

    const success = promedio >= objetivo;

    let calificacion = 1;
    let descripcion = "Necesitas mejorar mucho!";

    if (promedio >= objetivo) {
        calificacion = 3;
        descripcion = "Excelente, has cumplido tu objetivo!";
    } else if (promedio >= objetivo * 0.7) {
        calificacion = 2;
        descripcion = "Bien, pero podrías mejorar.";
    } else {
        calificacion = 1;
        descripcion = "...tomalo en serio, tu puedes!";
    }
  return {
    periodoLength,
    diasEntrenamiento,
    objetivo,
    promedio,
    success,
    calificacion,
    descripcion
  }
}