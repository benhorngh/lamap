import CountrySearch from "./mapsComponents/CountrySearch";
import ExampleMap from "./mapsComponents/ExampleMap";

function Main() {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;
  return (
    <div>
      <CountrySearch />
      <ExampleMap center={center} zoom={zoom} />
    </div>
  );
}

export default Main;
