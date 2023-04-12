import {
  faEllipsisVertical,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Stack, Typography } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import { Country } from "src/common/models";

interface CountryProps {
  country: Country;
}

const CountryComponent: React.FC<CountryProps> = (props) => {
  return (
    <Box padding={"10px"}>
      <Stack
        justifyContent="space-between"
        direction="row"
        paddingX={2}
        paddingY={1}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <FontAwesomeIcon icon={faLocationPin} />
          <Typography>{props.country.name}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <CountryFlag countryCode={props.country.code} />
          <FontAwesomeIcon icon={faEllipsisVertical} color={"grey"} />
        </Stack>
      </Stack>
    </Box>
  );
};

const CountryFlag = (props: { countryCode: string }) => {
  return (
    <ReactCountryFlag
      countryCode={props.countryCode}
      svg
      style={{
        width: "1.5em",
        height: "1.5em",
      }}
    />
  );
};

export default CountryComponent;
