import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import WeatherNavigator from './navigation/WeatherNavigator'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import weatherReducer from './store/reducers/weatherReducer'

const rootReducer = combineReducers({
  weather: weatherReducer
})
                           
const store = createStore(rootReducer, applyMiddleware(thunk)) // remove applyMiddleware when ready for deployment

export default function App() {

  return (
    <Provider store={store}>
      <WeatherNavigator />
    </Provider>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

