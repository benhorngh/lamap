import { Box } from "@mui/material";
import { useAddCountry } from "src/common/api";
import { Country } from "src/common/models";
import CountrySearch from "src/mapsComponents/CountrySearch";

const SearchBar = () => {
  const addCountry = useAddCountry();

  const handleSelect = (country: Country) => {
    addCountry.mutate(country);
  };

  return (
    <Box padding={3}>
      <CountrySearch onSelect={handleSelect} />
    </Box>
  );
};
export default SearchBar;
