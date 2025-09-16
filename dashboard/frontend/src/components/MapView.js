import React from "react";
import { MapContainer, TileLayer, GeoJSON, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const { BaseLayer, Overlay } = LayersControl;

// Dummy resource layers (normally from GIS data)
const forestLayer = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "Polygon",
    coordinates: [[[77.55, 23.25], [77.57, 23.25], [77.57, 23.28], [77.55, 23.28], [77.55, 23.25]]]
  }
};

const farmlandLayer = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "Polygon",
    coordinates: [[[77.58, 23.22], [77.60, 23.22], [77.60, 23.26], [77.58, 23.26], [77.58, 23.22]]]
  }
};

const waterLayer = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "Polygon",
    coordinates: [[[77.52, 23.20], [77.54, 23.20], [77.54, 23.23], [77.52, 23.23], [77.52, 23.20]]]
  }
};

// Village demo data (as before)
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

const MapView = ({ onVillageSelect }) => {
  const onEachVillage = (feature, layer) => {
    const { name, family, land_size, claim_date, status } = feature.properties;

    // Call only if function is passed
    layer.on("click", () => {
      if (onVillageSelect) {
        onVillageSelect(feature.properties);
      }
    });

    layer.setStyle({
      color: getColor(status),
      weight: 2,
      fillOpacity: 0.4
    });
  };

  return (
    <MapContainer center={[23.25, 77.55]} zoom={12} style={{ height: "100vh", width: "100%" }}>
      <LayersControl position="topright">
        <BaseLayer checked name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
        </BaseLayer>

        <Overlay checked name="Village Land Rights">
          <GeoJSON data={villageData} onEachFeature={onEachVillage} />
        </Overlay>

        <Overlay name="Forest">
          <GeoJSON data={forestLayer} style={{ color: "darkgreen", fillColor: "lightgreen", weight: 1 }} />
        </Overlay>

        <Overlay name="Farmland">
          <GeoJSON data={farmlandLayer} style={{ color: "brown", fillColor: "wheat", weight: 1 }} />
        </Overlay>

        <Overlay name="Water Bodies">
          <GeoJSON data={waterLayer} style={{ color: "blue", fillColor: "lightblue", weight: 1 }} />
        </Overlay>
      </LayersControl>
    </MapContainer>
  );
};


export default MapView;
