import React, { useContext, useRef, useState } from "react";
import "./index.css";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "./commons/images/navbar-image.png";
import { withRouter } from "react-router-dom";
import LoginModal from "./components/login-modal";
import RegisterModal from "./components/register-modal";
import { AppContext } from "./App";
import LogoutButton from "./components/logout-button";
import ViewProfileModal from "./components/view-profile-modal";

const textStyle = {
  color: "white",
  textDecoration: "none",
};

function NavigationBar() {
  const { isLoggedIn, setIsAdmin } = useContext(AppContext);
  const [rentDropdownOpen, setRentDropdownOpen] = useState(false);
  const [buyDropdownOpen, setBuyDropdownOpen] = useState(false);

  const rentRef = useRef(null);
  const purchaseRef = useRef(null);

  function rentToggle() {
    rentRef.current.click();
  }

  function rentMouseOn() {
    setRentDropdownOpen(true);
  }

  function rentMouseOff() {
    setRentDropdownOpen(false);
  }

  function buyToggle() {
    purchaseRef.current.click();
  }

  function buyMouseOn() {
    setBuyDropdownOpen(true);
  }

  function buyMouseOff() {
    setBuyDropdownOpen(false);
  }

  return (
    <div>
      <Navbar
        className="fixed-top"
        style={{ backgroundColor: "#585454" }}
        light
        expand="md"
      >
        <NavbarBrand href="/">
          <img src={logo} width={"38vmax"} height={"38vmax"} alt={"logo"} />
        </NavbarBrand>
        <Nav className="mx-auto" navbar>
          <NavLink href="/" style={textStyle} className="navLinks">
            Acasa
          </NavLink>

          <NavLink href="/news" style={textStyle} className="navLinks">
            Noutati
          </NavLink>

          <NavLink href="/aboutUs" style={textStyle} className="navLinks">
            Despre noi
          </NavLink>

          <Dropdown
            direction={"end"}
            onMouseEnter={rentMouseOn}
            onMouseLeave={rentMouseOff}
            toggle={rentToggle}
            isOpen={rentDropdownOpen}
          >
            <DropdownToggle style={textStyle} className="navLinks" nav caret>
              Inchirieri
            </DropdownToggle>
            <DropdownMenu dark>
              <NavLink
                href="/rent#studiosDiv"
                className="navLinksDropdown"
                style={textStyle}
              >
                Garsoniere
              </NavLink>

              <NavLink
                href="/rent#apartmentsDiv"
                className="navLinksDropdown"
                style={textStyle}
              >
                Apartamente
              </NavLink>

              <NavLink
                href="/rent#housesDiv"
                className="navLinksDropdown"
                style={textStyle}
              >
                Case
              </NavLink>
            </DropdownMenu>
          </Dropdown>

          <Dropdown
            direction={"end"}
            onMouseEnter={buyMouseOn}
            onMouseLeave={buyMouseOff}
            toggle={buyToggle}
            isOpen={buyDropdownOpen}
          >
            <DropdownToggle style={textStyle} className="navLinks" nav caret>
              Vanzari
            </DropdownToggle>
            <DropdownMenu dark>
              <NavLink
                href="/purchase#studiosDiv"
                className="navLinksDropdown"
                style={textStyle}
              >
                Garsoniere
              </NavLink>

              <NavLink
                href="/purchase#apartmentsDiv"
                className="navLinksDropdown"
                style={textStyle}
              >
                Apartamente
              </NavLink>

              <NavLink
                href="/purchase#housesDiv"
                className="navLinksDropdown"
                style={textStyle}
              >
                Case
              </NavLink>
            </DropdownMenu>
          </Dropdown>

          <NavLink href="/contact" style={textStyle} className="navLinks">
            Contact
          </NavLink>
        </Nav>
        <Nav className="ms-auto" navbar>
          {!isLoggedIn && (
            <>
              <NavItem>
                <LoginModal />
              </NavItem>
              <NavItem>
                <RegisterModal />
              </NavItem>
            </>
          )}
          {isLoggedIn && (
            <>
              <NavItem>
                {" "}
                <ViewProfileModal />
              </NavItem>
              <NavItem>
                {" "}
                <LogoutButton />
              </NavItem>
            </>
          )}
        </Nav>
      </Navbar>
      <a ref={rentRef} href="/rent" style={{ display: "none" }} />
      <a ref={purchaseRef} href="/purchase" style={{ display: "none" }} />
    </div>
  );
}

// export default NavigationBar;
export default withRouter(NavigationBar);
