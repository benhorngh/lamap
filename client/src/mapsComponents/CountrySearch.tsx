import { TextField } from "@mui/material";
import React, { useRef, useEffect } from "react";
import "./maps.css";

interface CountrySearchProps {}

function CountrySearch(props: CountrySearchProps) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current === null) return;

    new window.google.maps.places.Autocomplete(ref.current, {
      types: ["country"],
    });
  }, [ref]);

  return (
    <TextField
      fullWidth
      inputProps={{ ref: ref, placeholder: "Japan" }}
      variant="standard"
      label="Country"
    />
  );
}

export default CountrySearch;
