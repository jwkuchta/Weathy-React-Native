import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import WeatherContainer from '../components/WeatherContainer'
import Home from '../components/Home'
import EnterLocationForm from '../components/EnterLocationForm'

const WeatherNavigator = createStackNavigator({
    Home: Home,
    WeatherContainer: WeatherContainer,
    EnterLocation: EnterLocationForm
})

export default createAppContainer(WeatherNavigator)