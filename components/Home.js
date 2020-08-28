import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CurrentLocationButton } from './Buttons'
import Fetching from './Fetching'
import { OPEN_WEATHER_API_KEY as apiKey } from '../_apiKeys'
import WeatherContainer from './WeatherContainer'
import { CustomLocationButton } from './Buttons'
import EnterLocationForm from './EnterLocationForm'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'

const Home = (props) => {

    const [ fetching, setFetching ] = useState(false)
    const [ weatherData, setWeatherData ] = useState(null)

    const onPressHandler = () => {
        setFetching(true)
        setTimeout(() => getCurrentLocationData(), 1500)
        // getCurrentLocationData()
    }

    const onCustomLocationHandler = () => {
        setFetching(false)
        props.navigation.replace('EnterLocation')
    }

    const getCurrentLocationData = () => {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude
            let lon =  position.coords.longitude
            getWeatherData(lat, lon)
        })
        }   
    }

    const getWeatherData = (lat, lon) => {
        let apiUrl = `${baseUrl}lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
        fetch(apiUrl)
        .then(resp => resp.json())
        .then(data => {
        setWeatherData(data)
        setFetching(false)
        })
    }

    return (
        <View style={styles.container}>
        {!weatherData && fetching && <Fetching />}
        {!weatherData && !fetching && 
        <View>
            <CustomLocationButton onPress={onCustomLocationHandler} />
            <CurrentLocationButton onPress={onPressHandler} />
        </View>}
        {weatherData && <WeatherContainer 
        weatherData={weatherData} 
        clearWeather={setWeatherData} 
        fetching={fetching}
        navigation={props.navigation}
        />}
        {/* {custom && !weatherData && !fetching && <EnterLocationForm navigation={props.navigation} setCustom={setCustom} />} */}
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

export default Home