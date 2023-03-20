import './home-style.css';
import emailIcon from '../commons/images/email-icon.png';
import phoneIcon from '../commons/images/phone-icon.png';
import pinkArrow from '../commons/images/pink-arrow.png';
import React from "react";

function Home(){
    return(
        <div className="mainDiv">

            <div className="bgrImage">
                <p className="titleText">IMOBILIARE PENTRU TINE</p>
            </div>

            <div className="whyUsAndContactDiv">

                <div className="col1Div">
                    <p className="textStyle">De ce sa ne alegi pe noi?</p>
                </div>

                <div className="rowsDiv col2Div">
                    <div className="rowsDiv">
                        <div className="col1Div">
                            <img src={pinkArrow} className="arrowComponent" alt={"arrow"} />
                        </div>
                        <div className="col2Div">
                            <p className="textStyle">Poti adauga gratuit anunturi</p>
                        </div>
                    </div>

                    <div className="rowsDiv">
                        <div className="col1Div">
                            <img src={pinkArrow} className="arrowComponent" alt={"arrow"} />

                        </div>
                        <div className="col2Div">
                            <p className="textStyle">Poti cauta cu usurinta imobile</p>
                        </div>
                    </div>

                    <div className="rowsDiv">
                        <div className="col1Div">
                            <img src={pinkArrow} className="arrowComponent" alt={"arrow"} />
                        </div>
                        <div className="col2Div">
                            <p className="textStyle">Proprietarii imobilelor sunt verificati</p>
                        </div>
                    </div>

                    <div className="rowsDiv">
                        <div className="col1Div">
                            <img src={pinkArrow} className="arrowComponent" alt={"arrow"} />
                        </div>
                        <div className="col2Div">
                            <p className="textStyle">Functionam pe tot teritoriul Romaniei</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="whyUsAndContactDiv">

                <div className="col1Div">
                    <p className="textStyle">Contacteaza-ne acum:</p>
                </div>
                <div className="col2Div">
                    <img src={emailIcon} width={"38"} height={"38"} alt={"email icon"} />
                    <p className="contactTextStyle">imobiliare_pentru_tine@gmail.com</p>
                </div>
                <div className="col3Div">
                    <img src={phoneIcon} width={"38"} height={"38"} alt={"phone icon"} />
                    <p className="contactTextStyle">+40761937332</p>
                </div>

            </div>

        </div>
    );

}
export default Home;