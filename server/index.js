import { addLocation, getLocations } from "./maps.js";

import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/map", (req, res) => {
  const locations = getLocations();
  res.send({ locations });
});

app.post("/map", (req, res) => {
  const newLocation = addLocation(req.body);
  res.send({ location: newLocation });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
