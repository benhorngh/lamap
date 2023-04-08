import { Outlet } from "react-router-dom";
import FixedBottomNavigation from "./BottomNavbar";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box maxWidth="800px" margin="auto">
      <Outlet />
      <FixedBottomNavigation />
    </Box>
  );
};

export default Layout;
