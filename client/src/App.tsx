import { QueryClientProvider } from "react-query";
import Router from "./Router";
import { queryClient } from "./common/reactQueryClient";
import GoogleMapsProvider from "./mapsComponents/GoogleMapsProvider";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleMapsProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <Router />
      </GoogleMapsProvider>
    </QueryClientProvider>
  );
}

export default App;
