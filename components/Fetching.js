import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import colors from '../constants/colors'

const Fetching = () => {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color={colors.orange} />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
})

export default Fetching