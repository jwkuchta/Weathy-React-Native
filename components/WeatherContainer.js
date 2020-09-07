import React from 'react'
import { View, StyleSheet } from 'react-native'
import WeatherOutput from './WeatherOutput'
import { CustomButton } from './Buttons'
import Fetching from './Fetching'
import { OPEN_WEATHER_API_KEY as apiKey } from '../_apiKeys'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'

const WeatherContainer = (props) => {

    const weatherData = props.navigation.getParam('weatherData')
    const fetching = props.navigation.getParam('fetching')
    // const withForm = props.navigation.getParam('withForm')

    console.log('WEATHER CONTAINER -- PROPS --', weatherData, fetching)

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