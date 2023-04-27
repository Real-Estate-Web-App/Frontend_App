import { HOST } from "../commons/hosts";
import RestApiClient from "../commons/api/rest-client";

const endpoint = {
  getBuildings: "/getBuildings",
  createBuilding: "/createBuilding",
  updateBuilding: "/updateBuilding",
  deleteBuilding: "/deleteBuilding",
};

function createBuilding(
  type,
  building_type,
  image,
  description,
  address,
  total_price,
  nb_of_rooms,
  area,
  callback
) {
  let request = new Request(HOST.backend_api + endpoint.createBuilding, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type,
      building_type,
      image,
      description,
      address,
      total_price,
      nb_of_rooms,
      area,
    }),
  });
  console.log(request.url);
  RestApiClient.performRequest(request, callback);
}

function updateBuilding(
  id,
  type,
  image,
  description,
  total_price,
  nb_of_rooms,
  area,
  callback
) {
  let request = new Request(HOST.backend_api + endpoint.updateBuilding, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      type,
      image,
      description,
      total_price,
      nb_of_rooms,
      area,
    }),
  });
  console.log(request.url);
  RestApiClient.performRequest(request, callback);
}

function deleteBuilding(id, callback) {
  let request = new Request(HOST.backend_api + endpoint.deleteBuilding, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  });
  console.log(request.url);
  RestApiClient.performRequest(request, callback);
}

function getAllBuildings(callback) {
  let request = new Request(HOST.backend_api + endpoint.getBuildings, {
    method: "GET",
  });

  console.log(request.url);
  RestApiClient.performRequest(request, callback);
}

export { createBuilding, updateBuilding, deleteBuilding, getAllBuildings };
