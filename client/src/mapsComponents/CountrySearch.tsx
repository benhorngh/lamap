import { TextField } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import "./maps.css";
import { Country } from "src/common/models";

interface CountrySearchProps {
  onSelect: (country: Country) => void;
}

function CountrySearch(props: CountrySearchProps) {
  const ref = useRef(null);
  const [searchValue, setSearchValue] = useState("");

  const savePlace = (placeId: string, name: string, code: string) => {
    console.log("selected:", placeId, name, code);

    props.onSelect({ id: placeId, name, code });
  };

  useEffect(() => {
    if (ref.current === null) return;

    const autoComplete = new window.google.maps.places.Autocomplete(
      ref.current,
      {
        types: ["country"],
        fields: ["address_components", "place_id"],
      }
    );
    google.maps.event.addListener(autoComplete, "place_changed", () => {
      const place = autoComplete.getPlace();
      console.log(place);
      if (place && place.place_id && place.address_components) {
        savePlace(
          place.place_id,
          place.address_components[0].long_name,
          place.address_components[0].short_name
        );
        setSearchValue("");
      } else {
        console.log("Error: No such place");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return (
    <TextField
      fullWidth
      inputProps={{
        ref: ref,
        placeholder: "Japan",
        value: searchValue,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value),
      }}
      variant="standard"
      label="Country"
    />
  );
}

export default CountrySearch;
