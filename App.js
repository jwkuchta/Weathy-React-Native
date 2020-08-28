import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import WeatherNavigator from './navigation/WeatherNavigator'

export default function App() {

  return (
    <WeatherNavigator />
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

