import React from 'react'
import CustomButton from './CustomButton'

const CurrentLocationButton = props => {
    return (
        <CustomButton 
            onPress={props.onPress}>
            Current Location
        </CustomButton>
    )
}

export default CurrentLocationButton