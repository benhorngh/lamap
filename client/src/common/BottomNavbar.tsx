import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faMap,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { AppRoutes } from "src/Router";

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
  }, [value]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            // label="Countries"
            icon={<FontAwesomeIcon icon={faMap} />}
            component={Link}
            to={AppRoutes.countriesList}
          />
          <BottomNavigationAction
            // label="Statistics"
            icon={<FontAwesomeIcon icon={faChartLine} />}
            component={Link}
            to={AppRoutes.statistics}
          />
          <BottomNavigationAction
            // label="Achievements"
            icon={<FontAwesomeIcon icon={faTrophy} />}
            component={Link}
            to={AppRoutes.achievements}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
