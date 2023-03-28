import React, {useEffect, useRef, useState} from 'react';
import './index.css';
import {
    Button, Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand, NavItem,
    NavLink,
} from 'reactstrap';
import logo from './commons/images/navbar-image.png';
import {withRouter} from "react-router-dom";

const textStyle = {
    color: 'white',
    textDecoration: 'none',
};

function NavigationBar(props) {

    const [rentDropdownOpen, setRentDropdownOpen] = useState(false);
    const [buyDropdownOpen, setBuyDropdownOpen] = useState(false);

    const rentRef = useRef(null);
    const purchaseRef = useRef(null);

    function rentToggle(){
        rentRef.current.click();
    }

    function rentMouseOn(){
        setRentDropdownOpen(true);
    }

    function rentMouseOff(){
        setRentDropdownOpen(false);
    }

    function buyToggle(){
        purchaseRef.current.click();
    }

    function buyMouseOn(){
        setBuyDropdownOpen(true);
    }

    function buyMouseOff(){
        setBuyDropdownOpen(false);
    }

    return (
        <div>
            <Navbar className="fixed-top" style={{backgroundColor: '#585454'}} light expand="md">
                <NavbarBrand href="/">
                    {/*onClick={props.onClickFunction}*/}{/*functie care la apasarea iconitei reseteaza cookies -> logout user*/}
                    <img src={logo} width={"38vmax"} height={"38vmax"} alt={"logo"} />
                </NavbarBrand>
                <Nav className="mx-auto" navbar>
                    <NavLink href="/" style={textStyle} className="navLinks">Acasa</NavLink>

                    <NavLink href="/news" style={textStyle} className="navLinks">Noutati</NavLink>

                    <NavLink href="/aboutUs" style={textStyle} className="navLinks">Despre noi</NavLink>

                    <Dropdown direction={'end'} onMouseEnter={rentMouseOn} onMouseLeave={rentMouseOff} toggle={rentToggle} isOpen={rentDropdownOpen}>
                        <DropdownToggle style={textStyle} className="navLinks" nav caret>
                            Inchirieri
                        </DropdownToggle>
                        <DropdownMenu dark>
                            <DropdownItem>
                                <NavLink href="/rent#studiosDiv" style={textStyle}>Garsoniere</NavLink>
                            </DropdownItem>

                            <DropdownItem>
                                <NavLink href="/rent#apartmentsDiv" style={textStyle}>Apartamente</NavLink>
                            </DropdownItem>

                            <DropdownItem>
                                <NavLink href="/rent#housesDiv" style={textStyle}>Case</NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>


                    <Dropdown direction={'end'} onMouseEnter={buyMouseOn} onMouseLeave={buyMouseOff} toggle={buyToggle} isOpen={buyDropdownOpen}>
                        <DropdownToggle style={textStyle} className="navLinks" nav caret>
                            Vanzari
                        </DropdownToggle>
                        <DropdownMenu dark>
                            <DropdownItem>
                                <NavLink href="/" style={textStyle}>Garsoniere</NavLink>
                            </DropdownItem>

                            <DropdownItem>
                                <NavLink href="/" style={textStyle}>Apartamente</NavLink>
                            </DropdownItem>

                            <DropdownItem>
                                <NavLink href="/" style={textStyle}>Case</NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <NavLink href="/contact" style={textStyle} className="navLinks">Contact</NavLink>
                </Nav>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <Button style={{backgroundColor: '#9ACD32', marginRight: '10%'}}>Login</Button>
                    </NavItem>
                    <NavItem>
                        <Button style={{backgroundColor: '#cc506e', marginLeft: '10%'}}>Register</Button>
                    </NavItem>
                </Nav>
            </Navbar>
            <a ref={rentRef} href="/rent" style={{display: 'none'}}/>
            <a ref={purchaseRef} href="/purchase" style={{display: 'none'}}/>
        </div>
    );
}

// export default NavigationBar;
export default withRouter(NavigationBar)