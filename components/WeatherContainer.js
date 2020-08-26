import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import WeatherOutput from './WeatherOutput'
import colors from '../constants/colors'
import CustomButton from './CustomButton'
import Fetching from './Fetching'

const WeatherContainer = (props) => {

    console.log('fetching: ', props.fetching)
    console.log('weatherData === null: ', props.weatherData === null)

    const handleBackHandler = () => {
        props.clearWeather(null)
    }

    if (props.fetching && props.weatherData === null) {
        return (
            <View>
                <Fetching />
            </View>
        )
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