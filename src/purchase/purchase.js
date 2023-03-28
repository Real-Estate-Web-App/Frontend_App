import './purchase-style.css';
import React, {useState} from "react";
import {Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Input, Row} from "reactstrap";

import thirdCardImage from "../commons/images/third-card-image.jpg";

function Purchase(){

    return(
        <div className="mainDiv_2">
            <div className="bgrImageDiv1_2" id="studiosDiv">
                <div className="headerDiv_2">
                    <p className="header1Style1_2">IMOBILE DE&nbsp;</p>
                    <p className="header1Style2_2">CUMPARAT</p>
                </div>
                <p className="header2Style_2">ANUNTURI GARSONIERE</p>
                <div className="multipleCardsDiv_2 cardsTextStyle_2">
                    <Card className="cardDiv_2">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle_2">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle_2">
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
                    <Card className="cardDiv_2">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle_2">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle_2">
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
                    <Card className="cardDiv_2">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle_2">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle_2">
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
                <div className="searchDiv_2">
                    <div className="col1Search_2 textSearch_2">
                        Cauta garsoniere in:
                    </div>
                    <div className="col2Search_2">
                        <Input className="inputStyle_2" type="text" placeholder="Type a city..." />
                    </div>
                    <div className="col3Search_2">
                        <Button style={{backgroundColor: '#cc506e'}}>Cautare</Button>
                    </div>
                </div>
            </div>

            <div className="bgrImageDiv2_2" id="apartmentsDiv">
                <p className="headerApartmentsHouses_2">ANUNTURI APARTAMENTE</p>
                <div className="multipleCardsDiv_2 cardsTextStyle_2">
                    <Card className="cardDiv_2">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle_2">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle_2">
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
                    <Card className="cardDiv_2">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle_2">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle_2">
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
                    <Card className="cardDiv_2">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle_2">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle_2">
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
                <div className="searchDiv_2">
                    <div className="col1Search_2 textSearch_2">
                        Cauta apartamente in:
                    </div>
                    <div className="col2Search_2">
                        <Input className="inputStyle_2" type="text" placeholder="Type a city..." />
                    </div>
                    <div className="col3Search_2">
                        <Button style={{backgroundColor: '#cc506e'}}>Cautare</Button>
                    </div>
                </div>
            </div>

            <div className="bgrImageDiv3_2" id="housesDiv">
                <p className="headerApartmentsHouses_2">ANUNTURI CASE</p>
                <div className="multipleCardsDiv_2 cardsTextStyle_2">
                    <Card className="cardDiv_2">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle_2">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle_2">
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
                    <Card className="cardDiv_2">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle_2">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle_2">
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
                    <Card className="cardDiv_2">
                        <Row className="g-0">
                            <Col md={4} className="colsStyle_2">
                                <CardImg variant="top" src={thirdCardImage} />
                            </Col>
                            <Col md={8} className="colsStyle_2">
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
                <div className="searchDiv_2">
                    <div className="col1Search_2 textSearch_2">
                        Cauta case in:
                    </div>
                    <div className="col2Search_2">
                        <Input className="inputStyle_2" type="text" placeholder="Type a city..." />
                    </div>
                    <div className="col3Search_2">
                        <Button style={{backgroundColor: '#cc506e'}}>Cautare</Button>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Purchase;