import React, { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { CustomButton } from './Buttons'
import { AntDesign } from '@expo/vector-icons'
import { OPEN_WEATHER_API_KEY as apiKey } from '../_apiKeys'
import Fetching from '../components/Fetching'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'

const EnterLocationForm = props => {

    const [ city, setCity ] = useState(null)
    const [ country, setCountry ] = useState(null)
    const [ fetching, setFetching ] = useState(false)

    const handleSubmitForm = () => {
        setFetching(true)
        getWeatherData(city, country)  
    }

    const getWeatherData = async (city, country) => {
        let apiUrl = `${baseUrl}q=${city},${country}&appid=${apiKey}&units=imperial`
        const response = await fetch(apiUrl)
        const data = await response.json()
        setFetching(false)
        props.navigation.navigate('WeatherContainer', {
            weatherData: data,
            withForm: true
        })
    }

    if (fetching) {
        console.log('fetching in EnterLocationForm', fetching)
        return (
            <View>
                <Fetching />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input} 
                blurOnSubmit 
                autoCapitalize='none' 
                autoCorrect={false}
                keyboardType='default'
                minLength={3}
                value={city}
                placeholder='City...'
                onChangeText={(city) => setCity(city)}
                />
                <TextInput 
                style={styles.input} 
                blurOnSubmit 
                autoCapitalize='none' 
                autoCorrect={false}
                keyboardType='default'
                minLength={3}
                value={country}
                placeholder='Country...'
                onChangeText={(country) => setCountry(country)}
                />
            </View>
            <View style={styles.buttons}>
                <CustomButton onPress={handleSubmitForm}><AntDesign name="search1" size={24} color="white" /></CustomButton>
                {/* <CustomButton onPress={goBackHome}><AntDesign name="back" size={24} color="white" /></CustomButton> */}
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
        // flex: 1,
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