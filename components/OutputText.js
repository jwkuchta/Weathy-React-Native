import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const OutputText = props => {
    
    return (
        <Text style={{...styles.title, ...props.style}}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        padding: 5
    }
})

export default OutputText