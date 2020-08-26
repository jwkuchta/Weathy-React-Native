import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Switch } from 'react-native'
import Fetching from './Fetching'
import OutputText from './OutputText'
import ToggleSwitch from 'toggle-switch-react-native'
import colors from '../constants/colors'

const WeatherOutput = ({ weatherData }) => {

    const { temp, temp_min, temp_max, feels_like, pressure, humidity } = weatherData.main
    let iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`

    const [ option, setOption ] = useState(false)

    const toCelsius = temp => Math.round((5/9) * (temp - 32))

    if (!weatherData) {
        return <Fetching />
    } else {
        return (
            <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.text}>{weatherData.name}, {weatherData.sys.country}</Text>
                </View>
                <View style={styles.weatherHeader}>
                    <View style={styles.imageContainer}>
                        <Image source={{uri: iconUrl}} style={styles.image} />
                    </View>
                    <Text style={styles.text}>{!option ? `${temp} °F` : `${toCelsius(temp)} °C `}</Text>
                </View>
                <View style={styles.toggleContainer}>
                    <ToggleSwitch 
                    isOn={option}
                    onColor={colors.orange}
                    offColor='#D3D3D3'
                    label='°F'
                    labelStyle={{fontSize: '18'}}
                    size='medium'
                    onToggle={() => setOption(!option) }
                    />
                <OutputText> °C</OutputText>
                </View>
                <OutputText>Conditions: {weatherData.weather[0].main} - {weatherData.weather[0].description}</OutputText>
                <OutputText>Temperature: {!option ? `${Math.round(temp)} °F` : `${toCelsius(temp)} °C `}</OutputText>
                <OutputText>Min temperature: {!option ? `${Math.round(temp_min)} °F` : `${toCelsius(temp_min)} °C `}</OutputText>
                <OutputText>Max temperature: {!option ? `${Math.round(temp_max)} °F` : `${toCelsius(temp_max)} °C `}</OutputText>
                <OutputText>Feels like: {!option ? `${Math.round(feels_like)} °F` : `${toCelsius(feels_like)} °C `}</OutputText>
                <OutputText>Pressure: {pressure} hpa</OutputText>
                <OutputText>Humidity: {humidity}</OutputText>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 80,
        height: 80,
        marginLeft: 0,
        marginBottom: 10,
        marginTop: 10
    }, 
    weatherHeader: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    toggleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})

export default WeatherOutput