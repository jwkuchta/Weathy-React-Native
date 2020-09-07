import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import WeatherContainer from '../components/WeatherContainer'
import Home from '../components/Home'
import EnterLocationForm from '../components/EnterLocationForm'
import CurrentLocationWeather from '../components/CurrentLocationWeather'

const WeatherNavigator = createStackNavigator({
    Home: Home,
    CurrentLocation: CurrentLocationWeather,
    EnterLocation: EnterLocationForm,
    WeatherContainer: WeatherContainer
})

export default createAppContainer(WeatherNavigator)