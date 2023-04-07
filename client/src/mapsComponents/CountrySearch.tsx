import { TextField } from "@mui/material";
import React, { useRef, useEffect } from "react";

interface CountrySearchProps {}

function CountrySearch(props: CountrySearchProps) {
  const ref = useRef(null);

  useEffect(() => {
    const bound = new window.google.maps.LatLngBounds(
      new google.maps.LatLng(-33.8902, 151.1759),
      new google.maps.LatLng(-33.8474, 151.2631)
    );
    new window.google.maps.places.Autocomplete(ref.current!, {
      bounds: bound,
      types: ["country"],
    });
  });

  return <TextField inputProps={{ ref: ref }} />;
}

export default CountrySearch;
