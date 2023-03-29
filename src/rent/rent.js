import './rent-style.css';
import React, {useState} from "react";
import {Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Input, Nav, Navbar, NavLink, Row} from "reactstrap";
import DatePicker from 'react-date-picker';

import thirdCardImage from "../commons/images/third-card-image.jpg";
import calendarIcon from "../commons/images/calendar-icon.png";

function Rent(){

    const [studioValue, setStudioValue] = useState(new Date());

    return(
        <div className="mainDiv">
            <div className="bgrImageDiv1" id="studiosDiv">
                <div className="headerDiv">
                    <p className="header1Style1">IMOBILE DE&nbsp;</p>
                    <p className="header1Style2">INCHIRIAT</p>
                </div>
                <p className="header2Style">ANUNTURI GARSONIERE</p>
                <div className="multipleCardsDiv cardsTextStyle">
                    <Card className="cardDiv">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle">
                                <CardBody>
                                    <CardTitle>Garsoniera de 25 m²</CardTitle>
                                    <CardText>
                                        Cluj-Napoca, Cluj
                                    </CardText>
                                    <CardText>
                                        30.000 € | 1.200 €/m² | 1 camera | 25 m²
                                    </CardText>
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                    <Card className="cardDiv">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle">
                                <CardBody>
                                    <CardTitle>Garsoniera de 30 m²</CardTitle>
                                    <CardText>
                                        Gilau, Cluj
                                    </CardText>
                                    <CardText>
                                        30.000 € | 1.000 €/m² | 1 camera | 30 m²
                                    </CardText>
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                    <Card className="cardDiv">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle">
                                <CardBody>
                                    <CardTitle>Garsoniera de 35 m²</CardTitle>
                                    <CardText>
                                        Floresti, Cluj
                                    </CardText>
                                    <CardText>
                                        35.000 € | 1.200 €/m² | 2 camere | 35 m²
                                    </CardText>
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div className="searchDiv">
                    <div className="col1Search textSearch">
                        Cauta garsoniere in:
                    </div>
                    <div className="col2Search">
                        <Input className="inputStyle" type="text" placeholder="Type a city..." />
                    </div>
                    <div className="col3Search textSearch">
                        &nbsp;, in perioada
                    </div>
                    <div className="col4Search">
                        <img src={calendarIcon} width={"40vmax"} height={"40vmax"} alt={"calendar"} />
                    </div>
                    <div className="col5Search">
                        <DatePicker value={studioValue} onChange={setStudioValue} format={"yyyy-MM-dd"}/>
                    </div>
                    <div className="col6Search">
                        <Button style={{backgroundColor: '#cc506e'}}>Cautare</Button>
                    </div>
                </div>
            </div>

            <div className="bgrImageDiv2" id="apartmentsDiv">
                <p className="headerApartmentsHouses">ANUNTURI APARTAMENTE</p>
                <div className="multipleCardsDiv cardsTextStyle">
                    <Card className="cardDiv">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle">
                                <CardBody>
                                    <CardTitle>Apartament de 60 m²</CardTitle>
                                    <CardText>
                                        Cluj-Napoca, Cluj
                                    </CardText>
                                    <CardText>
                                        60.000 € | 1.000 €/m² | 2 camere | 60 m²
                                    </CardText>
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                    <Card className="cardDiv">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle">
                                <CardBody>
                                    <CardTitle>Apartament de 100 m²</CardTitle>
                                    <CardText>
                                        Florești, Cluj
                                    </CardText>
                                    <CardText>
                                        100.000 € | 1.000 €/m² | 3 camere | 100 m²
                                    </CardText>
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                    <Card className="cardDiv">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle">
                                <CardBody>
                                    <CardTitle>Apartament de 90 m²</CardTitle>
                                    <CardText>
                                        Apahida, Cluj
                                    </CardText>
                                    <CardText>
                                        85.000 € | 945 €/m² | 3 camere | 90 m²
                                    </CardText>
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div className="searchDiv">
                    <div className="col1Search textSearch">
                        Cauta apartamente in:
                    </div>
                    <div className="col2Search">
                        <Input className="inputStyle" type="text" placeholder="Type a city..." />
                    </div>
                    <div className="col3Search textSearch">
                        &nbsp;, in perioada
                    </div>
                    <div className="col4Search">
                        <img src={calendarIcon} width={"40vmax"} height={"40vmax"} alt={"calendar"} />
                    </div>
                    <div className="col5Search">
                        <DatePicker value={studioValue} onChange={setStudioValue} format={"yyyy-MM-dd"}/>
                    </div>
                    <div className="col6Search">
                        <Button style={{backgroundColor: '#cc506e'}}>Cautare</Button>
                    </div>
                </div>
            </div>

            <div className="bgrImageDiv3" id="housesDiv">
                <p className="headerApartmentsHouses">ANUNTURI CASE</p>
                <div className="multipleCardsDiv cardsTextStyle">
                    <Card className="cardDiv">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle">
                                <CardBody>
                                    <CardTitle>Casa de 180 m²</CardTitle>
                                    <CardText>
                                        Cluj-Napoca, Cluj
                                    </CardText>
                                    <CardText>
                                        250.000 € | 1.389 €/m² | 4 camere | 180 m²
                                    </CardText>
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                    <Card className="cardDiv">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle">
                                <CardBody>
                                    <CardTitle>Casa de 200 m²</CardTitle>
                                    <CardText>
                                        Florești, Cluj
                                    </CardText>
                                    <CardText>
                                        300.000 € | 1.500 €/m² | 5 camere | 200 m²
                                    </CardText>
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                    <Card className="cardDiv">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle">
                                <CardBody>
                                    <CardTitle>Casa de 230 m²</CardTitle>
                                    <CardText>
                                        Apahida, Cluj
                                    </CardText>
                                    <CardText>
                                        300.000 € | 1.305 €/m² | 6 camere | 230 m²
                                    </CardText>
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div className="searchDiv">
                    <div className="col1Search textSearch">
                        Cauta case in:
                    </div>
                    <div className="col2Search">
                        <Input className="inputStyle" type="text" placeholder="Type a city..." />
                    </div>
                    <div className="col3Search textSearch">
                        &nbsp;, in perioada
                    </div>
                    <div className="col4Search">
                        <img src={calendarIcon} width={"40vmax"} height={"40vmax"} alt={"calendar"} />
                    </div>
                    <div className="col5Search">
                        <DatePicker value={studioValue} onChange={setStudioValue} format={"yyyy-MM-dd"}/>
                    </div>
                    <div className="col6Search">
                        <Button style={{backgroundColor: '#cc506e'}}>Cautare</Button>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Rent;