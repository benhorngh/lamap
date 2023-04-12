import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import Countries from "./Countries";

const ListPage = () => {
  return (
    <Box>
      <SearchBar />
      <Countries />
    </Box>
  );
};

export default ListPage;
