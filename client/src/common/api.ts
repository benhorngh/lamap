import { useMutation, useQuery } from "react-query";
// import httpClient from "./httpClient";
import { Country } from "./models";
import { queryClient } from "./reactQueryClient";

let MOCK_DB = [{ id: "1", name: "Mock Name", code: "US" }];

async function getMap() {
  //   const { data } = await httpClient.get<Country[]>("/map");
  //   return data;
  return Promise.resolve(MOCK_DB);
}

export function useGetMap() {
  return useQuery(["map"], getMap);
}

async function addCountry(country: Country) {
  //   const { data } = await httpClient.post<Country[]>("/map", { country });
  //   return data;
  MOCK_DB = [...MOCK_DB, country];
  return Promise.resolve("OK");
}

export function useAddCountry() {
  return useMutation(addCountry, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("map");
    },
  });
}
