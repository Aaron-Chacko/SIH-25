import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const villageData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Village A",
        "status": "granted",
        "family": "Tribal Family 1",
        "land_size": "2 acres",
        "claim_date": "2018"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[77.5, 23.2], [77.6, 23.2], [77.6, 23.3], [77.5, 23.3], [77.5, 23.2]]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Village B",
        "status": "pending",
        "family": "Tribal Family 2",
        "land_size": "1.5 acres",
        "claim_date": "2019"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[77.6, 23.2], [77.7, 23.2], [77.7, 23.3], [77.6, 23.3], [77.6, 23.2]]]
      }
    }
  ]
};

const getColor = (status) => {
  switch (status) {
    case "granted": return "green";
    case "pending": return "yellow";
    case "rejected": return "red";
    default: return "gray";
  }
};

const MapView = () => {
  const onEachVillage = (feature, layer) => {
    const { name, family, land_size, claim_date, status } = feature.properties;
    layer.bindPopup(`
      <b>${name}</b><br/>
      Family: ${family}<br/>
      Land Size: ${land_size}<br/>
      Claim Date: ${claim_date}<br/>
      Status: ${status}
    `);
    layer.setStyle({ color: getColor(status), weight: 2 });
  };

  return (
    <MapContainer center={[23.25, 77.55]} zoom={12} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <GeoJSON data={villageData} onEachFeature={onEachVillage} />
    </MapContainer>
  );
};

export default MapView;
