import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const App = () => {
  return (
    <div className="map-container">
      <MapContainer
        center={[31.5085, -9.7495]}
        zoom={14}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[34.05, -6.83]}>
          <Popup>This is a marker popup!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default App;
