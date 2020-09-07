import { SET_WEATHER_DATA, CLEAR_WEATHER_DATA, SET_FETCHING } from '../actions/weatherActions'

const initialState = {
    weatherData: {},
    fetching: false
}

export default weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_DATA:
            return {
                ...state,
                weatherData: action.payload
            }
        case CLEAR_WEATHER_DATA:
            return initialState
        case SET_FETCHING:
            return {
                ...state,
                fetching: action.payload
            }
        default: 
            return state
    }
}