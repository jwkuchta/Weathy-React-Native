import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const WeatherOutput = props => {
    return (
        <View>
            <Text style={styles.text}>THE WEATHER OUTPUT WILL GO HERE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 28
    }
})

export default WeatherOutput