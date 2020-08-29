import React from 'react'
import { View, StyleSheet } from 'react-native'
import WeatherOutput from './WeatherOutput'
import { CustomButton } from './Buttons'
import Fetching from './Fetching'

const WeatherContainer = (props) => {

    console.log('WEATHER CONTAINER -- PROPS --', props.clearWeather, props.fetching)

    const handleBackHandler = () => {
        props.navigation.replace('Home')
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