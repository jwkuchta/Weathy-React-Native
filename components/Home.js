// import React, { useState } from 'react'
// import { StyleSheet, View } from 'react-native'
// import { CurrentLocationButton } from './Buttons'
// import Fetching from './Fetching'
// import { OPEN_WEATHER_API_KEY as apiKey } from '../_apiKeys'
// import WeatherContainer from './WeatherContainer'
// import { CustomLocationButton } from './Buttons'
// import EnterLocationForm from './EnterLocationForm'

// const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'

// const Home = (props) => {

//     const [ fetching, setFetching ] = useState(false)
//     const [ weatherData, setWeatherData ] = useState(null)
//     const [ custom, setCustom ] = useState(false)

//     const onPressHandler = () => {
//         setFetching(true)
//         setTimeout(() => getCurrentLocationData(), 1500)
//         // getCurrentLocationData()
//     }

//     const onCustomLocationHandler = () => {
//         setCustom(true)
//         props.navigation.navigate('EnterLocation')
//         setFetching(false)  
//     }

//     const getCurrentLocationData = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(position => {
//                 let lat = position.coords.latitude
//                 let lon =  position.coords.longitude
//                 getWeatherData(lat, lon)
//             })
//         }
//         if (weatherData) {
//             console.log(weatherData)
//             props.navigation.navigate('WeatherContainer', {
//                 weatherData, 
//                 fetching
//             })
//         }  
//     }

//     // rewritten to accomodate for lat/lon country/city
//     const getWeatherData = (param1, param2) => {
//         let apiUrl = `${baseUrl}lat=${param1}&lon=${param2}&units=imperial&appid=${apiKey}`
//         if (custom) {
//             apiUrl = `${baseUrl}q=${param1},${param2}&appid=${apiKey}&units=imperial`
//         }
//         // let apiUrl = `${baseUrl}lat=${param1}&lon=${param2}&units=imperial&appid=${apiKey}`
//         fetch(apiUrl)
//         .then(resp => resp.json())
//         .then(data => {
//         setWeatherData(data)
//         setFetching(false)
//         setCustom(false)
//         })
//     }


//     return (
//         <View style={styles.container}>
//         {!weatherData && fetching && <Fetching />}
//         {!weatherData && !fetching && custom && 
//         <EnterLocationForm 
//         getWeatherData={getWeatherData}
//         weatherData={weatherData}
//         setCustom={setCustom} 
//         fetching={fetching}
//         custom={custom} 
//         navigation={props.navigation}
//         />
//         }
//         {!weatherData && !fetching && !custom && 
//             <View>
//                 <CustomLocationButton onPress={onCustomLocationHandler} />
//                 <CurrentLocationButton onPress={onPressHandler} />
//             </View>}
//         {weatherData && <WeatherContainer 
//         weatherData={weatherData} 
//         // clearWeather={setWeatherData} 
//         fetching={fetching}
//         // navigation={props.navigation}
//         />
//         }
//         </View>
//     )
// }

//     const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// })

// export default Home

import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { CurrentLocationButton } from './Buttons'
import Fetching from './Fetching'
import { OPEN_WEATHER_API_KEY as apiKey } from '../_apiKeys'
import WeatherContainer from './WeatherContainer'
import { CustomLocationButton } from './Buttons'
import EnterLocationForm from './EnterLocationForm'
import { setWeatherData, clearWeatherData } from '../store/actions/weatherActions'
import { useSelector, useDispatch } from 'react-redux'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'

const Home = (props) => {

    // const dispatch = useDispatch()

    const [ fetching, setFetching ] = useState(false)
    const [ weatherData, setWeatherData ] = useState(null)

    const getCurrentLocationWeatherHandler = () => {
        setFetching(true)
        setTimeout(() => getCurrentLocationData(), 1500) 
        // console.log('weather data: ', weatherData) 
    }

    const getCurrentLocationData = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let lat = position.coords.latitude
                let lon =  position.coords.longitude
                getWeatherData(lat, lon)
            })
        }  
    }

    const getWeatherData = async (param1, param2) => {
        let apiUrl = `${baseUrl}lat=${param1}&lon=${param2}&units=imperial&appid=${apiKey}`
        // if (custom) {
        //     apiUrl = `${baseUrl}q=${param1},${param2}&appid=${apiKey}&units=imperial`
        // }
        // let apiUrl = `${baseUrl}lat=${param1}&lon=${param2}&units=imperial&appid=${apiKey}`
        const response = await fetch(apiUrl)
        const data = await response.json()
        setFetching(false)
        props.navigation.navigate('WeatherContainer', {
            weatherData: data,
            fetching: fetching
        })
    }

    const enterLocationFormHandler = () => {
        props.navigation.navigate('EnterLocation')
        setFetching(false)  
    }

    return (
        <View style={styles.container}>
        {!weatherData && fetching && <Fetching />}
        {!weatherData && !fetching && 
            <View>
                <CustomLocationButton onPress={enterLocationFormHandler} />
                <CurrentLocationButton onPress={getCurrentLocationWeatherHandler} />
            </View>}
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