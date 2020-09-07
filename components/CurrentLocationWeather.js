import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { GetWeatherButton } from './Buttons'
import { OPEN_WEATHER_API_KEY as apiKey } from '../_apiKeys'
import Fetching from './Fetching'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'

const CurrentLocationWeather = (props) => {

    const latitude = props.navigation.getParam('latData')
    const longitude = props.navigation.getParam('lonData')
    // console.log('CURRENT LOCATION WEATHER COMPONENT latitude and longitude', latitude, longitude) OK

    const [ fetching, setFetching ] = useState(false)

    const getWeatherButtonHandler = () => {
        setFetching(true)
        getWeatherData(latitude, longitude)
        setFetching(false)
        
    }

    const getWeatherData = async (lat, lon) => {
        let apiUrl = `${baseUrl}lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
        const response = await fetch(apiUrl)
        const data = await response.json()
        props.navigation.navigate('WeatherContainer', {
            weatherData: data, 
            fetching: fetching,
            withForm: false
        })
    }

    return (
        <View style={styles.container}>
            <View>
                {fetching && <Fetching />}
                <GetWeatherButton onPress={getWeatherButtonHandler} />
            </View>
        </View>
    )
}

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CurrentLocationWeather