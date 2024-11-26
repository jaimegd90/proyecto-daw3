import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Maps1 = () => {
    // Coordenadas iniciales
    const center = {
        lat: 38.27054903513889,  // Reemplaza con tu latitud
        lng:  -0.6723609319893761,  // Reemplaza con tu longitud
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyAhM42AhLAQt0WoXXdzagnAu5aFF8RjsNY">
            <GoogleMap
                mapContainerStyle={{ width: '60%', height: '500px', boxShadow:'0 10px 5px rgba(0,0,0,0.1)'}}
                center={center}
                zoom={15} // Nivel de zoom
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default Maps1;
