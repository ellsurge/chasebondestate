"use client";
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px',
};

// Default center coordinates
const defaultCenter = {
  lat: -3.745,
  lng: -38.523,
};

// Default zoom level
const defaultZoom = 10;

function MyComponent({ center = defaultCenter, zoom = defaultZoom }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map:any) {
    // Adjust map bounds based on center
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, [center]);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

// Set default props for the component
MyComponent.defaultProps = {
  center: defaultCenter,
  zoom: defaultZoom,
};

export default React.memo(MyComponent);
