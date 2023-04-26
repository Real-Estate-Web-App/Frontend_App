import { Button } from "reactstrap";
import React from "react";
import * as AuthorizationAPI from "../api/authorization-api";

function LogoutButton() {
  function deleteCookies() {
    if (localStorage.getItem("isLoggedIn") !== null) {
      localStorage.removeItem("isLoggedIn");
    }
    if (localStorage.getItem("isAdmin") !== null) {
      localStorage.removeItem("isAdmin");
    }
    if (localStorage.getItem("loggedUser") !== null) {
      localStorage.removeItem("loggedUser");
    }
    window.location.reload();
  }

  function logoutUser() {
    return AuthorizationAPI.logout((result, status) => {
      if (status === 200) {
        deleteCookies();
      }
    });
  }

  return (
    <div>
      <Button
        type="button"
        style={{ backgroundColor: "#9ACD32", marginLeft: "10%" }}
        onClick={logoutUser}
      >
        Logout
      </Button>
    </div>
  );
}
export default LogoutButton;
