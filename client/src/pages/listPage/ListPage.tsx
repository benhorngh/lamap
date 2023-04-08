import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import Countries from "./Countries";

const ListPage = () => {
  return (
    <Box>
      <SearchBar />
      <Countries countries={[{ name: "Denmark" }, { name: "Mexico" }]} />
    </Box>
  );
};

export default ListPage;
