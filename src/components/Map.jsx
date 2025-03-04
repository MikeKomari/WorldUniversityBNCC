import React from "react";
import { render } from "react-dom";
import { MapContainer } from "https://cdn.esm.sh/react-leaflet/MapContainer";
import { TileLayer } from "https://cdn.esm.sh/react-leaflet/TileLayer";
import { useMap } from "https://cdn.esm.sh/react-leaflet/hooks";
import { Marker, Popup } from "react-leaflet";

function Map({ position }) {
  console.log(position);
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
