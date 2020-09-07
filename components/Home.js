import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { CurrentLocationButton } from './Buttons'
import Fetching from './Fetching'
import { CustomLocationButton } from './Buttons'

const Home = (props) => {

    const [ fetching, setFetching ] = useState(false)

    const currentLocationButtonHandler =() => {
        setFetching(true)
        getCurrentLocationData() 
    }

    const enterLocationFormHandler = () => {
        setFetching(false)
        props.navigation.navigate('EnterLocation')
    }

    const navigateAway = (lat, lon) => {
        setFetching(false)
        props.navigation.navigate('CurrentLocation', {
            latData: lat, 
            lonData: lon
        })
    }

    const getCurrentLocationData = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let latitude = position.coords.latitude
                let longitude =  position.coords.longitude
                navigateAway(latitude, longitude)
            })
        }   
    }

    if (fetching) {
        console.log('fetching in Home', fetching)
        return <Fetching />
    }

    return (
        <View style={styles.container}>
            <View>
                {!fetching && (
                    <View>
                        <CustomLocationButton onPress={enterLocationFormHandler} />
                        <CurrentLocationButton onPress={currentLocationButtonHandler} />
                    </View>
                )}
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
    }
})

export default Home