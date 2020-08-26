import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../constants/colors'

const Fetching = props => {
    return (
        <View style={styles.fetchingContainer}>
            <View>
                <Text style={styles.text}>Getting weather data</Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    fetchingContainer: {
        backgroundColor: colors.orange,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    text: {
        color: 'white',
        fontSize: 28
    }
})

export default Fetching