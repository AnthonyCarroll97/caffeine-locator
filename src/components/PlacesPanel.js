import React from 'react'
import PlaceTile from './PlaceTile'

import PlacesPanelLoading from './PlacesPanelLoading';
import Attributions from './Attributions';

const PlacesPanel = ({ places, getPlaceDetails, map, handleMarkerClick }) => {

    const renderPlaces = (places) => {
        const sortedPlaces = places.sort((place1, place2) => {
             return place1.rating > place2.rating ? -1 : 1
        })
        return sortedPlaces.map((placeObj, index) => {
            return <PlaceTile 
                key={index}
                placeObj={placeObj}
                getPlaceDetails={getPlaceDetails}
                map={map}
                handleMarkerClick={handleMarkerClick}
            />
        })
    }

    return (
        <div className="lg:w-3/12 lg:relative lg:block h-2/5 lg:h-screen bg-highlightMid absolute lg:bottom-0 -bottom-36 w-screen flex flex-col">
            <div className="lg:overflow-y-scroll lg:overflow-x-hidden lg:h-5/6 lg:block lg:flex-none overflow-x-scroll flex mb-8 lg:mb-0">
                { places.length > 1 ? renderPlaces(places) 
                : 
                <PlacesPanelLoading></PlacesPanelLoading>
                }
            </div>
            <Attributions></Attributions>
        </div>
        
        
    )
}

export default PlacesPanel
