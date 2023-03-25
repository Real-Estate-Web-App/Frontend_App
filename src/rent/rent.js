import './rent-style.css';
import React from "react";
import {Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row} from "reactstrap";
import thirdCardImage from "../commons/images/third-card-image.jpg";


function Rent(){
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
            </div>
        </div>
    );

}
export default Rent;