import './rent-style.css';
import React, {useState} from "react";
import {Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Input, Row} from "reactstrap";
import DatePicker from 'react-date-picker';

import thirdCardImage from "../commons/images/third-card-image.jpg";
import calendarIcon from "../commons/images/calendar-icon.png";

function Rent(){

    const [studioValue, setStudioValue] = useState(new Date());

    return(
        <div className="mainDiv">
            <div className="bgrImageDiv1">
                <div className="headerDiv">
                    <p className="header1Style1">IMOBILE&nbsp;</p>
                    <p className="header1Style2">REZIDENTIALE</p>
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
                                    <CardTitle>Casa de vanzare - 5 camere</CardTitle>
                                    <CardText>
                                        Florești, Cluj
                                    </CardText>
                                    <CardText>
                                        5 camere | 211 m² utili | 600 m²
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
                                    <CardTitle>Casa de vanzare - 5 camere</CardTitle>
                                    <CardText>
                                        Florești, Cluj
                                    </CardText>
                                    <CardText>
                                        5 camere | 211 m² utili | 600 m²
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
                                    <CardTitle>Casa de vanzare - 5 camere</CardTitle>
                                    <CardText>
                                        Florești, Cluj
                                    </CardText>
                                    <CardText>
                                        5 camere | 211 m² utili | 600 m²
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

            <div className="bgrImageDiv2">
                <p className="headerApartmentsHouses">ANUNTURI APARTAMENTE</p>
                <div className="multipleCardsDiv cardsTextStyle">
                    <Card className="cardDiv">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle">
                                <CardBody>
                                    <CardTitle>Casa de vanzare - 5 camere</CardTitle>
                                    <CardText>
                                        Florești, Cluj
                                    </CardText>
                                    <CardText>
                                        5 camere | 211 m² utili | 600 m²
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
                                    <CardTitle>Casa de vanzare - 5 camere</CardTitle>
                                    <CardText>
                                        Florești, Cluj
                                    </CardText>
                                    <CardText>
                                        5 camere | 211 m² utili | 600 m²
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
                                    <CardTitle>Casa de vanzare - 5 camere</CardTitle>
                                    <CardText>
                                        Florești, Cluj
                                    </CardText>
                                    <CardText>
                                        5 camere | 211 m² utili | 600 m²
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

            <div className="bgrImageDiv3">
                <p className="headerApartmentsHouses">ANUNTURI CASE</p>
                <div className="multipleCardsDiv cardsTextStyle">
                    <Card className="cardDiv">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle">
                                <CardBody>
                                    <CardTitle>Casa de vanzare - 5 camere</CardTitle>
                                    <CardText>
                                        Florești, Cluj
                                    </CardText>
                                    <CardText>
                                        5 camere | 211 m² utili | 600 m²
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
                                    <CardTitle>Casa de vanzare - 5 camere</CardTitle>
                                    <CardText>
                                        Florești, Cluj
                                    </CardText>
                                    <CardText>
                                        5 camere | 211 m² utili | 600 m²
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
                                    <CardTitle>Casa de vanzare - 5 camere</CardTitle>
                                    <CardText>
                                        Florești, Cluj
                                    </CardText>
                                    <CardText>
                                        5 camere | 211 m² utili | 600 m²
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