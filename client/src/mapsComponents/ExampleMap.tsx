import React, { useRef, useEffect } from "react";

interface ExampleMapProps {}

function ExampleMap(props: ExampleMapProps) {
  const ref = useRef(null);
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

  useEffect(() => {
    new window.google.maps.Map(ref.current!, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" style={{ width: 500, height: 500 }} />;
}

export default ExampleMap;
