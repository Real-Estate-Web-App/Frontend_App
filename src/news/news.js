import './news-style.css';
import React from "react";
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import firstCardImage from '../commons/images/first-card-image.jpg';
import secondCardImage from '../commons/images/second-card-image.jpg';
import thirdCardImage from '../commons/images/third-card-image.jpg';


function News(){
    return(
        <div className="mainDiv">
            <div className="bgrImageDiv">
                <p className="headerTextStyle">Cele mai recente anunturi imobiliare din zona ta:</p>
                <div className="cardsDiv">
                    <Card className="card1Div">
                        <CardImg variant="top" src={firstCardImage} />
                        <CardBody>
                            <CardTitle>Casa de vanzare - 4 camere</CardTitle>
                            <CardText>
                                Cluj-Napoca, Cluj
                            </CardText>
                            <CardText>
                                4 camere | 160 m² utili | 430 m²
                            </CardText>
                            <Button style={{backgroundColor: '#cc506e'}}>Vezi anuntul</Button>
                        </CardBody>
                    </Card>

                    <Card className="card2Div">
                        <CardImg variant="top" src={secondCardImage} />
                        <CardBody>
                            <CardTitle>Casa de vanzare - 3 camere</CardTitle>
                            <CardText>
                                Apahida, Cluj
                            </CardText>
                            <CardText>
                                3 camere | 140 m² utili | 350 m²
                            </CardText>
                            <Button style={{backgroundColor: '#cc506e'}}>Vezi anuntul</Button>
                        </CardBody>
                    </Card>

                    <Card className="card3Div">
                        <CardImg variant="top" src={thirdCardImage} />
                        <CardBody>
                            <CardTitle>Casa de vanzare - 5 camere</CardTitle>
                            <CardText>
                                Florești, Cluj
                            </CardText>
                            <CardText>
                                5 camere | 211 m² utili | 600 m²
                            </CardText>
                            <Button style={{backgroundColor: '#cc506e'}}>Vezi anuntul</Button>
                        </CardBody>
                    </Card>

                </div>
            </div>

            <div className="infoDiv">
                <p>* La închirierea/cumpărarea imobilelor recent adăugate se oferă o reducere de 50% din prețul
                    prelucrării datelor *</p>
            </div>

        </div>
    );

}
export default News;