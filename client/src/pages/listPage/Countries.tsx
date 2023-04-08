import { Divider, Stack } from "@mui/material";
import { Country } from "src/common/models";
import CountryComponent from "../Country";

interface CountriesProps {
  countries: Country[];
}

const Countries: React.FC<CountriesProps> = (props) => {
  return (
    <Stack divider={<Divider orientation="horizontal" flexItem />}>
      {props.countries.map((country, i) => (
        <CountryComponent name={country.name} key={i} />
      ))}
    </Stack>
  );
};

export default Countries;
