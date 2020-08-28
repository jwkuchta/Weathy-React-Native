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
    const [ custom, setCustom ] = useState(false)

    const onPressHandler = () => {
        setFetching(true)
        setTimeout(() => getCurrentLocationData(), 1500)
        // getCurrentLocationData()
    }

    const onCustomLocationHandler = () => {
        setCustom(true)
        props.navigation.replace('EnterLocation')
        setFetching(false)  
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

    // rewritten to accomodate for lat/lon country/city
    const getWeatherData = (param1, param2) => {
        let apiUrl = `${baseUrl}lat=${param1}&lon=${param2}&units=imperial&appid=${apiKey}`
        console.log(custom)
        if (custom) {
            apiUrl = `${baseUrl}q=${param1},${param2}&appid=${apiKey}&units=imperial`
        }
        // let apiUrl = `${baseUrl}lat=${param1}&lon=${param2}&units=imperial&appid=${apiKey}`
        fetch(apiUrl)
        .then(resp => resp.json())
        .then(data => {
        setWeatherData(data)
        setFetching(false)
        setCustom(false)
        })
    }

    return (
        <View style={styles.container}>
        {!weatherData && fetching && <Fetching />}
        {!weatherData && !fetching && 
        <View>
            {custom ? 
            <EnterLocationForm navigation={props.navigation} hello={'hello there'}/> 
            : 
            <CustomLocationButton onPress={onCustomLocationHandler} />} 
            {!custom ? 
            <CurrentLocationButton onPress={onPressHandler} /> 
            : 
            null}  
        </View>}
        {weatherData && <WeatherContainer 
        weatherData={weatherData} 
        clearWeather={setWeatherData} 
        fetching={fetching}
        navigation={props.navigation}
        />}
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