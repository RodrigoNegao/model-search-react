import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { setItems, setItem } from '../../redux/modules/items';

const MapContainer = (props) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items);
  const [map, setMap] = useState(null);
  const { google, query, placeId } = props;

  function searchbyQuery(query) {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: map.center,
      radius: '200',
      type: ['restaurant'],
      query,
    };

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        //console.log('query', results);
        dispatch(setItems(results));
      }
    });
  }

  useEffect(() => {
    if (query) {
      searchbyQuery(query);
    }
  }, [query]);

  function getItemById(placeId) {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      placeId,
      fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
    };

    service.getDetails(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        //console.log('resta', resultId);
        dispatch(setItem(results));
      }
    });
  }

  useEffect(() => {
    if (placeId) {
      getItemById(placeId);
    }
  }, [placeId]);

  function searchNearby(map, center) {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: '1000',
      type: ['restaurant'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        //console.log('resta', results);
        dispatch(setItems(results));
      }
    });
  }

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
      zoom={16}
      {...props}>
      {items.map((item) => (
        <Marker
          key={item.place_id}
          name={item.name}
          position={{
            lat: item.geometry.location.lat(),
            lng: item.geometry.location.lng(),
          }}
        />
      ))}
      <Marker />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);
