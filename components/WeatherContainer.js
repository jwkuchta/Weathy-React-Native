import React from 'react'
import { View, StyleSheet } from 'react-native'
import WeatherOutput from './WeatherOutput'
import { CustomButton } from './Buttons'
import Fetching from './Fetching'

const WeatherContainer = (props) => {

    const weatherData = props.navigation.getParam('weatherData')
    const fetching = props.navigation.getParam('fetching')

    console.log('weather data and fetching from getParam: ', weatherData, fetching)

    // console.log('WEATHER CONTAINER -- PROPS --', props.weatherData, props.fetching)

    const handleBackHandler = () => {
        props.navigation.goBack()
    }

    if (fetching && weatherData === null) {
        return (
            <View>
                <Fetching />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <WeatherOutput weatherData={weatherData}/>
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