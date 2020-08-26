import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CurrentLocationButton from './components/CurrentLocationButton'
import Fetching from './components/Fetching'
import { OPEN_WEATHER_API_KEY as apiKey } from './_apiKeys'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'

console.log('api key', apiKey)

export default function App() {

  const [ fetching, setFetching ] = useState(false)
  const [ location, setLocation ] = useState(null)
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

        console.log('lat and lon from getCurrentLocationData', lat, lon)
        getWeatherData(lat, lon)
      })
    }   
  }

  // const getWeatherData = (lat, lon) => {
  //   let apiUrl = `${baseUrl}lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
  //   fetch(apiUrl)
  //     .then(resp => resp.json())
  //     .then(data => setWeatherData(data))
  //     .then(setFetching(false))
  // }

  const getWeatherData = (lat, lon) => {
    console.log('env', process.env.NODE_ENV)
    console.log('api key', apiKey)
    console.log(lat, lon, baseUrl)
    let apiUrl = `${baseUrl}lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
    fetch(apiUrl).then(resp => console.log(resp))
  }

  if (fetching) {
    console.log(fetching)
    return <Fetching />
  }

  return (
    <View style={styles.container}>
      <CurrentLocationButton onPress={onPressHandler} />
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
