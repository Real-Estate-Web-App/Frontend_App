import './contact-style.css';
import emailIcon from "../commons/images/email-icon.png";
import phoneIcon from "../commons/images/phone-icon.png";
import React from "react";

function Contact(){
    return(
      <div className="contactPageDiv">
          <div className="videoDiv">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/y9j-BL5ocW8"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen> Video imobiliare
              </iframe>
          </div>
          <div className="contactDiv">
              <div>
                  <p>Contacteaza-ne acum:</p>
              </div>
              <div>
                  <img src={emailIcon} width={"38"} height={"38"} alt={"email icon"} />
                  <p>imobiliare_pentru_tine@gmail.com</p>
              </div>
              <div>
                  <img src={phoneIcon} width={"38"} height={"38"} alt={"phone icon"} />
                  <p>+40761937332</p>
              </div>
          </div>
      </div>
    );
}
export default Contact;