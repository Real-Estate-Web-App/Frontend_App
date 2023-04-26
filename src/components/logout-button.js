import { Button } from "reactstrap";
import React from "react";

function LogoutButton() {
  function deleteCookies() {
    if (localStorage.getItem("isLoggedIn") !== null) {
      localStorage.removeItem("isLoggedIn");
    }
    if (localStorage.getItem("isAdmin") !== null) {
      localStorage.removeItem("isAdmin");
    }
    window.location.reload();
  }

  return (
    <div>
      <Button
        type="button"
        style={{ backgroundColor: "#9ACD32", marginRight: "10%" }}
        onClick={deleteCookies}
      >
        Logout
      </Button>
    </div>
  );
}
export default LogoutButton;
