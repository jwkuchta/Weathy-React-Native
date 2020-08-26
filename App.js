import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CurrentLocationButton from './components/CurrentLocationButton'
import Fetching from './components/Fetching'
import { OPEN_WEATHER_API_KEY as apiKey } from './_apiKeys'
import WeatherContainer from './components/WeatherContainer'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App() {

  const [ fetching, setFetching ] = useState(false)
  const [ weatherData, setWeatherData ] = useState(null)

  const onPressHandler = () => {
    setFetching(false)
    getCurrentLocationData()
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
    .then(data => setWeatherData(data))
  }

  return (
    <View style={styles.container}>
      {!weatherData && <CurrentLocationButton onPress={onPressHandler} />}
      {fetching && <Fetching />}
      {weatherData && <WeatherContainer weatherData={weatherData} clearWeather={setWeatherData}/>}
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
