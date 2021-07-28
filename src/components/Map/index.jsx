import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { ModalCustom } from '../index';
import { setItems, setItem } from '../../redux/modules/items';
// import { handleOpenModalGlobal } from '../../pages/Home';

const MapContainer = (props) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items);
  const [, setItemId] = useState(null);
  const [map, setMap] = useState(null);
  const { google, query, placeId } = props;
  const [modalOpened, setModalOpened] = useState(false);

  const searchbyQuery = useCallback(
    (map, query) => {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setItems([]));

      const request = {
        location: map.center,
        radius: '200',
        type: ['restaurant'],
        query,
      };

      service.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setItems(results));
        }
      });
    },
    [dispatch, google]
  );

  useEffect(() => {
    if (query) {
      searchbyQuery(map, query);
    }
  }, [query, map, searchbyQuery]);

  const getItemById = useCallback(
    (placeId) => {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setItem(null));

      const request = {
        placeId,
        fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
      };

      service.getDetails(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setItem(results));
        }
      });
    },
    [google, map, dispatch]
  );

  useEffect(() => {
    if (placeId) {
      getItemById(placeId);
    }
  }, [getItemById, placeId]);

  function searchNearby(map, center) {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: '1000',
      type: ['bar'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setItems(results));
      }
    });
  }

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  function handleOpenModal(placeId) {
    setItemId(placeId);
    console.log('Map>>>', placeId);
    setModalOpened(true);
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
          onClick={() => handleOpenModal(item.place_id)}
        />
      ))}
      <Marker />
      <ModalCustom open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);
