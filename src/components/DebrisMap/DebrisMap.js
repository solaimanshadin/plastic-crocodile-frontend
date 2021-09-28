import React from 'react';
import GoogleMapReact from 'google-map-react';

const DebrisMap = ({center, zoom}) => {
    return (
        <div className="debris-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBYr5z3E02EiH6T0etDj3-zhCQJhle7m90' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
        </GoogleMapReact>

        </div>
    );
};

DebrisMap.defaultProps = {
    center: {
        lat: 42.3265,
        lan: -122.8758
    },
    zoom: 14
}
export default DebrisMap;