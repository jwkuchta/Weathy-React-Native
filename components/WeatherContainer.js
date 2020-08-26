import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import WeatherOutput from './WeatherOutput'

const WeatherContainer = ({ fetching, weatherData, clearWeather }) => {

    const handleBackHandler = () => {
        clearWeather(null)
    }

    return (
        <View style={styles.container}>
            <WeatherOutput />
            <Button title="BACK" onPress={handleBackHandler}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})

export default WeatherContainer