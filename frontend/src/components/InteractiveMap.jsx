import React, { useState, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { MapPin, Clock, Euro, Star, ExternalLink } from 'lucide-react';

const mapContainerStyle = {
  width: '100%',
  height: '700px'
};

const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: true
};

export const InteractiveMap = ({ center, locations, filters }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [map, setMap] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBFw0Qbyq9zTFTd-tUqqo6885S1y0VqyP4' // Public API key for demo
  });

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  // Filter locations based on active filters
  const filteredLocations = locations.filter(location => {
    if (filters.length === 0) return true;
    return filters.includes(location.category);
  });

  // Marker icon colors based on category
  const getMarkerIcon = (category) => {
    const colors = {
      parking: '#707038', // Olive green
      attraction: '#C86432', // Terracotta
      brunch: '#9B59B6',
      lunch: '#3498DB',
      nightout: '#E74C3C'
    };
    
    return {
      path: window.google?.maps?.SymbolPath?.CIRCLE,
      fillColor: colors[category] || '#333333',
      fillOpacity: 1,
      strokeColor: '#FFFFFF',
      strokeWeight: 2,
      scale: 8
    };
  };

  if (loadError) {
    return <div className="text-center p-8">Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div className="text-center p-8">Loading map...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={center}
      options={mapOptions}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Elysium Retreat Marker */}
      <Marker
        position={center}
        icon={{
          url: 'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/u386b7x4_ChatGPT%20Image%206%20%CE%99%CE%BF%CF%85%CE%BD%202025%2C%2002_10_00%20%CE%BC.%CE%BC..png',
          scaledSize: new window.google.maps.Size(40, 40)
        }}
        title="Elysium Retreat"
      />

      {/* Location Markers */}
      {filteredLocations.map((location) => (
        <Marker
          key={location.id}
          position={{ lat: location.lat, lng: location.lng }}
          icon={getMarkerIcon(location.category)}
          onClick={() => setSelectedLocation(location)}
        />
      ))}

      {/* Info Window */}
      {selectedLocation && (
        <InfoWindow
          position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
          onCloseClick={() => setSelectedLocation(null)}
        >
          <div style={{ padding: '12px', maxWidth: '280px' }}>
            <h3 className="heading-3 mb-3" style={{ color: '#333333' }}>
              {selectedLocation.name}
            </h3>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} style={{ color: '#C86432' }} />
                <span>{selectedLocation.distance}</span>
              </div>

              {selectedLocation.hours && (
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={16} style={{ color: '#C86432' }} />
                  <span>{selectedLocation.hours}</span>
                </div>
              )}

              {selectedLocation.price && (
                <div className="flex items-center gap-2 text-sm">
                  <Euro size={16} style={{ color: '#C86432' }} />
                  <span>{selectedLocation.price}</span>
                </div>
              )}

              {selectedLocation.rating && (
                <div className="flex items-center gap-2 text-sm">
                  <Star size={16} fill="#C86432" style={{ color: '#C86432' }} />
                  <span>{selectedLocation.rating}/5</span>
                </div>
              )}

              {selectedLocation.description && (
                <p className="text-sm text-gray-600 mt-2">
                  {selectedLocation.description}
                </p>
              )}

              {selectedLocation.subcategory && (
                <span 
                  className="inline-block px-2 py-1 text-xs mt-2" 
                  style={{ 
                    background: '#f6f5e8',
                    color: '#707038',
                    border: '1px solid #bcbbb4'
                  }}
                >
                  {selectedLocation.subcategory}
                </span>
              )}
            </div>

            <a
              href={selectedLocation.link}
              target="blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm"
              style={{ color: '#C86432' }}
            >
              View on Google Maps
              <ExternalLink size={14} />
            </a>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};
