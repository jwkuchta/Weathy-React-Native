import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import WeatherOutput from './WeatherOutput'
import colors from '../constants/colors'
import CustomButton from './CustomButton'

const WeatherContainer = (props) => {

    console.log('props in the weather container', props)

    const handleBackHandler = () => {
        props.clearWeather(null)
    }

    return (
        <View style={styles.container}>
            <WeatherOutput weatherData={props.weatherData}/>
            <CustomButton onPress={handleBackHandler}>BACK</CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 40
    }
})

export default WeatherContainer