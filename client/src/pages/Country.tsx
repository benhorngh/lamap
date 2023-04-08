// import styled from "@emotion/styled";
import {
  faEllipsisVertical,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Stack, Typography } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
// import { COLOR_PALETTE } from "src/common/palette";

interface CountryProps {
  name: string;
}

// const StyledBoxBlock = styled(Box)({
//   backgroundColor: COLOR_PALETTE.light,
//   border: `1px solid ${COLOR_PALETTE.dark}`,
//   borderRadius: "4px",
//   boxShadow: `${COLOR_PALETTE.shadow} 0px 1px 3px`,
// });

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
          <Typography>{props.name}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <CountryFlag countryCode="US" />
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
