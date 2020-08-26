import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CurrentLocationButton from './components/CurrentLocationButton'
import Fetching from './components/Fetching'
import { OPEN_WEATHER_API_KEY as apiKey } from './_apiKeys'
import WeatherContainer from './components/WeatherContainer'
import CustomLocationButton from './components/CustomLocationButton'
import EnterLocationForm from './components/EnterLocationForm'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App() {

  const [ fetching, setFetching ] = useState(false)
  const [ weatherData, setWeatherData ] = useState(null)
  // const [ custom, setCustom ] = useState(false)

  const onPressHandler = () => {
    setFetching(true)
    setTimeout(() => getCurrentLocationData(), 1500)
    // getCurrentLocationData()
  }

  const onCustomLocationHandler = () => {
    setFetching(false)
    // setCustom(false)
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
      {!weatherData && !fetching && <CustomLocationButton onPress={onCustomLocationHandler} clearWeather={setWeatherData}/>}
      {/* {custom && <EnterLocationForm clearWeather={setWeatherData}/>} */}
      {!weatherData && fetching && <Fetching />}
      {!weatherData && !fetching && <CurrentLocationButton onPress={onPressHandler} />}
      {weatherData && <WeatherContainer weatherData={weatherData} clearWeather={setWeatherData} fetching={fetching}/>}
    </View>
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
