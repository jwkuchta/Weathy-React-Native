import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CustomButton } from './Buttons'

const EnterLocationForm = props => {

    const handleBackHandler = () => {
        props.navigation.replace('Home')
    }

    return (
        <View style={styles.container}>
            <Text>LOCATION FORM GOES HERE</Text>
            <CustomButton onPress={handleBackHandler}>BACK</CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default EnterLocationForm