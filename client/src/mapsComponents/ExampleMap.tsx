import React, { useRef, useEffect } from "react";

interface ExampleMapProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
}

function ExampleMap(props: ExampleMapProps) {
  const { center, zoom } = props;
  const ref = useRef(null);

  useEffect(() => {
    new window.google.maps.Map(ref.current!, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" style={{ width: 500, height: 500 }} />;
}

export default ExampleMap;
