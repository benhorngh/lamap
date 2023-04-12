import { CircularProgress, Divider, Stack } from "@mui/material";
import CountryComponent from "../Country";
import { useGetMap } from "src/common/api";

interface CountriesProps {}

const Countries: React.FC<CountriesProps> = (props) => {
  const getMap = useGetMap();

  if (getMap.isLoading) {
    return <CircularProgress />;
  }

  return (
    <Stack divider={<Divider orientation="horizontal" flexItem />}>
      {getMap.data?.map((country, i) => (
        <CountryComponent country={country} key={i} />
      ))}
    </Stack>
  );
};

export default Countries;
