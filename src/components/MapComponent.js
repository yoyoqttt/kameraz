import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import RoomCard from './RoomCard';
import '../styles/Map.css';
import { getAllRooms } from '../api/rooms';
import L from 'leaflet';
import 'leaflet-control-geocoder';

// Fix the marker bug with leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const customMarker = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [20, 25],
  iconAnchor: [12, 41],
});


const MapComponent = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [clickedCoords, setClickedCoords] = useState(null); // ✅ Fix: Ensure initialization
  const [searchLocation, setSearchLocation] = useState(null);





  
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const response = await getAllRooms();
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching room data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) {
    return <p>Loading Map . to nexrt..</p>;
  }

  

  // Calculate distance between two coordinates
  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // Filter rooms that are within 5 km of the search location
  const nearbyRooms = searchLocation
    ? rooms.filter((room) => {
        const coords = [...room.location.coordinates].reverse();
        return getDistance(searchLocation.lat, searchLocation.lng, coords[0], coords[1]) < 5;
      })
    : rooms;

  return (
    <>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '600px', width: '100%' }}>
        <TileLayer url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" subdomains={['mt0', 'mt1', 'mt2', 'mt3']} />

        {/* ✅ Fix: Use leaflet-control-geocoder instead of react-leaflet-search */}
        <SearchComponent setSearchLocation={setSearchLocation} />

        {nearbyRooms.map((room) => {
          const coords = [...room.location.coordinates].reverse(true);
          return (
            <Marker
              key={room._id}
              position={coords}
              icon={customMarker}
              eventHandlers={{
                click: () => {
                  setSelectedRoom(room);
                  setClickedCoords(coords);
                },
              }}
            >
              <Popup>
                {room.images && room.images.length > 0 && (
                  <img
                    src={room.images[0]}
                    alt={room.title}
                    style={{ width: '100%', maxHeight: '150px', objectFit: 'cover', marginBottom: '5px' }}
                  />
                )}
                <p><b>{room.title}</b></p>
                <p>Coordinates: {coords[0]}, {coords[1]}</p>
                <p>Click to see details</p>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {selectedRoom && <RoomCard room={selectedRoom} onClose={() => setSelectedRoom(null)} />}

      {/* ✅ Fix: Display clicked coordinates */}
      {/* {clickedCoords && (
        <div className="coordinates-display">
          <p><b>Selected Location:</b> {clickedCoords[0]}, {clickedCoords[1]}</p>
        </div>
      )} */}
    </>
  );
};

// ✅ New component for search functionality
const SearchComponent = ({ setSearchLocation }) => {
  const map = useMap();

  useEffect(() => {
    const geocoder = L.Control.geocoder({
      defaultMarkGeocode: false,
    })
      .on('markgeocode', function (e) {
        setSearchLocation(e.geocode.center);
        map.setView(e.geocode.center, 13);
      })
      .addTo(map);

    return () => map.removeControl(geocoder);
  }, [map, setSearchLocation]);

  return null;
};

export default MapComponent;
