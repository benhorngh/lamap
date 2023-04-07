export function getLocations() {
  return [
    new Location({
      id: 1,
      name: "Seoul",
      createdAt: "", // date time
      rating: 88,
      geo: "My loc", // geo location details
    }),
    new Location({
      id: 2,
      name: "Vienna",
      createdAt: "", // date time
      rating: 55,
      geo: "My loc", // geo location details
    }),
    new Location({
      id: 3,
      name: "Somewhere",
      createdAt: "", // date time
      rating: 100,
      geo: "My loc", // geo location details
    }),
    new Location({
      id: 4,
      name: "Israel",
      createdAt: "", // date time
      rating: 8,
      geo: "My loc", // geo location details
    }),
  ];
}

export function addLocation(location) {
  return new Location({
    id: 5,
    name: location.name,
    createdAt: "", // date time
    rating: location.rating,
    geo: location.geo, // geo location details
  });
}

class Location {
  constructor({ id, name, rating, geo }) {
    this.id = id;
    this.name = name;
    this.rating = rating;
    this.geo = geo;
  }
}
