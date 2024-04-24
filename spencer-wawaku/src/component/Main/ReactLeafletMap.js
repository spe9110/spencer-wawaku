import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import './MainSass/index_main.css';

function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
        <Marker position={position}>
            <Popup>
            Hello, I'm Spencer.
            </Popup>
        </Marker>
    )
}

export default function ReactLeafletMap(){

    return(
        <MapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={16} scrollWheelZoom={false} id="map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker/>           
        </MapContainer>
    )
}