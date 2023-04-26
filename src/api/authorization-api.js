import { HOST } from "../commons/hosts";
import RestApiClient from "../commons/api/rest-client";

const endpoint = {
  user: "/user",
  updateUser: "/updateProfile",
  register: "/register",
  login: "/login",
  logout: "/logout",
};

function getUserData(id, callback) {
  let request = new Request(HOST.backend_api + endpoint.user, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  console.log(request.url);
  RestApiClient.performRequest(request, callback);
}

function updateUserData(id, first_name, last_name, callback) {
  let request = new Request(HOST.backend_api + endpoint.updateUser, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, first_name, last_name }),
  });
  console.log(request.url);
  RestApiClient.performRequest(request, callback);
}

function register(email, password, first_name, last_name, callback) {
  let request = new Request(HOST.backend_api + endpoint.register, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, first_name, last_name }),
  });

  console.log("URL: " + request.url);

  RestApiClient.performRequest(request, callback);
}

function login(email, password, callback) {
  let request = new Request(HOST.backend_api + endpoint.login, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  console.log(request.url);
  RestApiClient.performRequest(request, callback);
}

function logout(callback) {
  let request = new Request(HOST.backend_api + endpoint.logout, {
    method: "GET",
  });

  console.log(request.url);
  RestApiClient.performRequest(request, callback);
}

export { getUserData, updateUserData, register, login, logout };
