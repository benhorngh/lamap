import { Wrapper, Status } from "@googlemaps/react-wrapper";

const GoogleMapsProvider = ({ children, apiKey }) => {
  const render = (status: any) => {
    switch (status) {
      case Status.LOADING:
        return <>GoogleMapsProvider Loading</>;
      case Status.FAILURE:
        return <>GoogleMapsProvider Failure</>;
      case Status.SUCCESS:
        return children;
      default:
        return <>GoogleMapsProvider Default</>;
    }
  };
  return <Wrapper apiKey={apiKey} render={render} libraries={["places"]} />;
};
export default GoogleMapsProvider;
