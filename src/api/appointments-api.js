import { HOST } from "../commons/hosts";
import RestApiClient from "../commons/api/rest-client";

const endpoint = {
  appointment: "/makeAppointment",
};

function makeAppointment(building_id, user_id, app_date, app_time, callback) {
  let request = new Request(HOST.backend_api + endpoint.appointment, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      building_id,
      user_id,
      app_date,
      app_time,
    }),
  });
  console.log(request.url);
  RestApiClient.performRequest(request, callback);
}

export { makeAppointment };
