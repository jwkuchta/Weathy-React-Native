export const SET_WEATHER_DATA = 'SET_WEATHER'
export const CLEAR_WEATHER_DATA = 'CLEAR_WEATHER_DATA'
export const SET_FETCHING = 'SET_FETCHING'

export const setWeatherData = weatherData => {
    return { type: SET_WEATHER_DATA, payload: weatherData }
}

export const clearWeatherData = () => {
    return { type: CLEAR_WEATHER_DATA }
}

export const setFetching = (fetching) => {
    return { type: SET_FETCHING, payload: fetching }
}