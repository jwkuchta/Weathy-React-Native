import React from 'react'
import { View, StyleSheet } from 'react-native'
import WeatherOutput from './WeatherOutput'
import { CustomButton } from './Buttons'

const WeatherContainer = (props) => {

    const weatherData = props.navigation.getParam('weatherData')

    const handleBackHandler = () => {
        props.navigation.goBack()
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