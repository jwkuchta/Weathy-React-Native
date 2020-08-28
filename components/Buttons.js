import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../constants/colors'

// this is the main button used to create the other custom buttons
export const CustomButton = props => {
    return (  
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.orange,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginHorizontal: 20,
        marginVertical: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
})

// main buttons on the home page to fetch current weather data
export const CurrentLocationButton = props => {
    
    return (
        <CustomButton 
            onPress={props.onPress}>
            Current Location
        </CustomButton>
    )
}

// main buttons on the home page to go to the city/country input form
export const CustomLocationButton = props => {
    return (
        <CustomButton
            onPress={props.onPress}>
            Enter Location
        </CustomButton>
    )
}

