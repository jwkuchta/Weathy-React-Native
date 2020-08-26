import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomButton from './CustomButton'

const EnterLocationForm = props => {

    const handleBackHandler = () => {
        props.clearWeather(null)
    }

    return (
        <View>
            <Text>LOCATION FORM GOES HERE</Text>
            <CustomButton onPress={handleBackHandler}>BACK</CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default EnterLocationForm