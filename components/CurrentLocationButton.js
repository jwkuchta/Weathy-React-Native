import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import colors from '../constants/colors'

const CurrentLocationButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Current Location</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.orange,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        // fontFamily: 'open-sans',
        fontSize: 18
    }
})

export default CurrentLocationButton