import React from 'react'
import CustomButton from './CustomButton'

const CustomLocationButton = props => {
    return (
        <CustomButton
            onPress={props.onPress}>
            Enter Location
        </CustomButton>
    )
}


export default CustomLocationButton