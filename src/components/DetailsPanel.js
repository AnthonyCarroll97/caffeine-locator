import React from 'react'
import { Rating } from '@material-ui/lab';
import Carousel from 'react-material-ui-carousel'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const DetailsPanel = ({ placeDetails, removeSelectedPlace }) => {

    const filterImages = () => {

        return (
          placeDetails.photos &&
          placeDetails.photos.filter(photoObj => {
            if(photoObj.height < photoObj.width){
                // pre-load the images
                const picture = new Image()
                picture.src = photoObj.getUrl()
                return true
            } 
            return false
          })
        )
    }
    
    return (
        <div className="absolute top-2 z-10 right-2 p-4 lg:w-4/12 lg:h-auto h-2/5 left-2 lg:left-auto rounded-lg bg-highlightMid lg:mr-0 ">
            <div className="flex justify-between mb-1">
                <h1 className="lg:text-3xl text-2xl">{placeDetails.name}</h1>
                <HighlightOffIcon style={{ fontSize: "40", cursor: "pointer" }}onClick={removeSelectedPlace}></HighlightOffIcon>
            </div>
            <div className="flex flex-col h-5/6 lg:block overflow-y-scroll">
                <div className="w-full">
                    <Rating 
                    name="stars"
                    value={placeDetails.rating}
                    readOnly
                    precision={0.1}
                    />
                    { placeDetails.opening_hours ?
                        <ul className="p-2 bg-highlightHigh rounded-lg mb-4 mt-2">
                            {placeDetails.opening_hours.weekday_text.map((string, index) => {
                                return <li key={index}>{string}</li>
                            })}
                        </ul>
                    :
                        null
                    }
                </div>
                { placeDetails.photos &&
                <div className="max-w-full">
                    <Carousel animation={"slide"}>
                        {filterImages().map((photo, index) => {
                            return <img src={photo.getUrl()} alt="cafe" key={index}></img>
                        })}
                    </Carousel>  
                </div>
                } 
            </div>
            
            
           
        </div>
    )
}

export default DetailsPanel
