import React from 'react'

export default function PlacesPanelLoading() {
    return (
        <div className="h-full flex justify-center items-center animate-spin overflow-hidden">
            <img  width="40"className="" alt="loading arrow" src="rotating-arrow.svg"></img>
        </div>
    )
}
