import React from 'react'

const Locate = ({panTo}) => {
    return (
        <div>
            <button onClick={() => {
                navigator.geolocation.getCurrentPosition((position) => {
                    panTo({
                        lat: position.coords.latitude,
                        lng: position.coords.latitude
                    }, () => null, {enableHighAccuracy: true})
                })
            }}
            >
                <img src="compass.svg" alt="compass" />
            </button>
        </div>
    )
}

export default Locate
