import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { CustomButton } from './Buttons'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 

const EnterLocationForm = props => {

    // console.log('enter lccation form props', props.setCustom)

    const [ city, setCity ] = useState(null)
    const [ country, setCountry ] = useState(null)
    const [ state, setState ] = useState(null)

    const handleBackHandler = () => {
        props.navigation.replace('Home')
        // props.setCustom(false)
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input} 
                blurOnSubmit 
                autoCapitalize='none' 
                autoCorrect={false}
                keyboardType='letter-pad'
                minLength={3}
                value={city}
                placeholder='City...'
                onChangeText={() => {}}
                />
                <TextInput 
                style={styles.input} 
                blurOnSubmit 
                autoCapitalize='none' 
                autoCorrect={false}
                keyboardType='letter-pad'
                minLength={3}
                value={country}
                placeholder='Country...'
                onChangeText={() => {}}
                />
            </View>
            <View style={styles.buttons}>
                <CustomButton onPress={handleBackHandler}><AntDesign name="search1" size={24} color="white" /></CustomButton>
                <CustomButton onPress={handleBackHandler}><AntDesign name="back" size={24} color="white" /></CustomButton>
            </View>
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
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        // width: '80%',
        // maxWidth: '95%',
        alignItems: 'center', // left to right
        justifyContent: 'center'
    },
    input: {
        fontSize: 25, 
        width: 130,
        textAlign: 'center',
        height: 40,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        // marginVertical: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        // flex: 1,
        flexDirection: 'row',
        marginBottom: 30
    }
})

export default EnterLocationForm