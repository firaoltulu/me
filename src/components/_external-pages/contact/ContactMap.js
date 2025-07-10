// import MapGL from 'react-map-gl';
import { useState, useMemo } from 'react';

import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';


// material
import { useTheme, styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
//
import { MapControlPopup, MapControlMarker, MapControlScale, MapControlNavigation } from '../../map';
import { mapConfig } from '../../../config';
import { varFadeIn, MotionInView } from '../../animate';

import Pin from './pin';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  zIndex: 0,
  height: 560,
  overflow: 'hidden',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right': {
    display: 'none'
  }
}));

const CITIES = [
  {
    "city": "New York", "population": "8,175,133",
    "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg",
    "state": "New York",
    "latitude": -87.603735, "longitude": 41.829985
  },
]

// ----------------------------------------------------------------------

export default function ContactMap() {

  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const [tooltip, setTooltip] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 8.9,
    longitude: 38.7,
    zoom: 2
  });

  const pins = useMemo(
    () =>
      CITIES.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={e => {
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );

  return (
    <MotionInView variants={varFadeIn}>

      <RootStyle>

        <Map

          initialViewState={{
            latitude: 8.9,
            longitude: 38.7,
            zoom: 1.5,
            bearing: 0,
            pitch: 0
          }}

          mapStyle={`mapbox://styles/mapbox/satellite-streets-v12`}
          mapboxAccessToken={mapConfig}
        >

          <GeolocateControl position="top-right" />
          <FullscreenControl position="top-right" />
          <NavigationControl position="top-right" />
          <ScaleControl />

          {pins}

          {/* {popupInfo && (
            <Popup
              anchor="top"
              longitude={Number(popupInfo.longitude)}
              latitude={Number(popupInfo.latitude)}
              onClose={() => setPopupInfo(null)}
            >
              <div>
                {popupInfo.city}, {popupInfo.state} |{' '}
                <a
                  target="_new"
                  href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}
                >
                  Wikipedia
                </a>
              </div>
              <img width="100%" src={popupInfo.image} />
            </Popup>
          )} */}

        </Map>

      </RootStyle>

    </MotionInView>
  );

}
