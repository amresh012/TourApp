/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from "react";
import MapGL from "react-map-gl";
import {
  MapControlScale,
  MapControlNavigation,
  MapControlGeolocate,
  MapControlMarker,
  MapControlFullscreen,
} from "../../components/map";
import { Card, CardContent } from "@mui/material";
import {styled} from '@mui/material/styles'
function Map({ data, ...other }) {
  // eslint-disable-next-line no-unused-vars
  const [tooltip, setTooltip] = useState(null);
  const [viewport, setViewport] = useState({
    zoom: 2,
  });

  const MapWrapperStyle = styled("div")(({theme})=>({
    zIndex:0,
    height:560,
    overflow:"hidden",
    position:"relative",
    borderRadius:theme.shape.borderRadius,
    "& .mapbox-ctrl-logo .mapbox-ctrl;bottom-right":{
        display:"none"
    }
  }))
  return (
    <Card>
     <CardContent>
      <MapWrapperStyle>
    <MapGL {...viewport} onViewportChange={setViewport} {...other}>
      <MapControlScale />
      <MapControlNavigation />
      <MapControlFullscreen/>
      <MapControlGeolocate/>
      {/* <MapControlPopup/>         */}
      {data.map((country) => {
          <MapControlMarker
          key={country.name}
          latitude={country.latlng[0]}
          longitude={country.latlng[1]}
          onclick={() => setTooltip(country)}
          style={{border:"1px"}}
          />;
        })}
    </MapGL>
          </MapWrapperStyle>
        </CardContent>
        </Card>
  );
}

export default Map;
