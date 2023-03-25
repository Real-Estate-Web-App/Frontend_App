import React, {useRef, useState} from 'react';
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
import {Link, withRouter} from "react-router-dom";

const textStyle = {
    color: 'white',
    textDecoration: 'none'
};

function NavigationBar(props) {

    const [rentDropdownOpen, setRentDropdownOpen] = useState(false);
    const [buyDropdownOpen, setBuyDropdownOpen] = useState(false);
    const [residentialDropdownOpen, setResidentialDropdownOpen] = useState(false);
    const [commercialDropdownOpen, setCommercialDropdownOpen] = useState(false);

    const purchaseRef = useRef(null);

    function rentToggle(){
        purchaseRef.current.click();
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

    function residentialToggle(){}

    function residentialMouseOn(){
        setResidentialDropdownOpen(true);
    }

    function residentialMouseOff(){
        setResidentialDropdownOpen(false);
    }

    function commercialToggle(){}

    function commercialMouseOn(){
        setCommercialDropdownOpen(true);
    }

    function commercialMouseOff(){
        setCommercialDropdownOpen(false);
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

                    <NavLink href="/" style={textStyle} className="navLinks">Despre noi</NavLink>

                    <Dropdown direction={'end'} onMouseEnter={rentMouseOn} onMouseLeave={rentMouseOff} toggle={rentToggle} isOpen={rentDropdownOpen}>
                        <DropdownToggle style={textStyle} className="navLinks" nav caret>
                            Inchirieri
                        </DropdownToggle>
                        <DropdownMenu dark>
                            <Dropdown direction={'end'} onMouseEnter={residentialMouseOn} onMouseLeave={residentialMouseOff} toggle={residentialToggle} isOpen={residentialDropdownOpen}>
                                <DropdownToggle style={textStyle} className="navLinksDropdown" nav caret>
                                    Imobile rezidentiale
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

                            <Dropdown direction={'end'} onMouseEnter={commercialMouseOn} onMouseLeave={commercialMouseOff} toggle={commercialToggle} isOpen={commercialDropdownOpen}>
                                <DropdownToggle style={textStyle} className="navLinksDropdown" nav caret>
                                    Imobile comerciale
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

                        </DropdownMenu>
                    </Dropdown>


                    <Dropdown direction={'end'} onMouseEnter={buyMouseOn} onMouseLeave={buyMouseOff} toggle={buyToggle} isOpen={buyDropdownOpen}>
                        <DropdownToggle style={textStyle} className="navLinks" nav caret>
                            Vanzari
                        </DropdownToggle>
                        <DropdownMenu dark>
                            <Dropdown direction={'end'} onMouseEnter={residentialMouseOn} onMouseLeave={residentialMouseOff} toggle={residentialToggle} isOpen={residentialDropdownOpen}>
                                <DropdownToggle style={textStyle} className="navLinksDropdown" nav caret>
                                    Imobile rezidentiale
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

                            <Dropdown direction={'end'} onMouseEnter={commercialMouseOn} onMouseLeave={commercialMouseOff} toggle={commercialToggle} isOpen={commercialDropdownOpen}>
                                <DropdownToggle style={textStyle} className="navLinksDropdown" nav caret>
                                    Imobile comerciale
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

                        </DropdownMenu>
                    </Dropdown>

                    <NavLink href="/" style={textStyle} className="navLinks">Contact</NavLink>
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
            <a ref={purchaseRef} href="/rent" style={{display: 'none'}}/>
        </div>
    );
}

// export default NavigationBar;
export default withRouter(NavigationBar)