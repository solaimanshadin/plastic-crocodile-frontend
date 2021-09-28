import React, { useState } from "react";
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
} from "react-map-gl";
import Pins from "./Pins";
import mapboxgl from 'mapbox-gl';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: "10px",
};

const navStyle = {
  top: 72,
  left: 0,
  padding: "10px",
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: "10px",
};
const Map = ({data, isLoading}) => {
  const [viewport, setViewport] = useState({
    latitude: 21.184006,
    longitude: 92.048107,
    zoom: 4,
    bearing: 0,
    pitch: 0,
  });
  const [popupInfo, setPopupInfo] = useState(null);

  return (
    <div className="map">
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/basic-v8"
        onViewportChange={setViewport}
        mapboxApiAccessToken={'pk.eyJ1Ijoic29sYWltYW5zaGFkaW4iLCJhIjoiY2tiMmQyeXR1MDFucjJwbnhqYzFzOWR3eCJ9.12SNRcv0uF7VAxE2UGCnlA'}
      >

       {data?.length && <Pins data={data} onClick={setPopupInfo} /> }

        {popupInfo && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
            
            <h6>{popupInfo.note} - {popupInfo.depth && 'Depth'} : {popupInfo.depth} </h6>
            <p className="small"><strong>At:</strong> {popupInfo.created_at}</p>

            <img width={200} src={popupInfo.image} alt="" />
            {/* <CityInfo info={popupInfo} /> */}
          </Popup>
        )}

        {/* <GeolocateControl style={geolocateStyle} /> */}
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </MapGL>
    </div>
  );
};

export default Map;
