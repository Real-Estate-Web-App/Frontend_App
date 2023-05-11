import "./rent-style.css";
import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Input,
  Row,
} from "reactstrap";
import DatePicker from "react-date-picker";

import thirdCardImage from "../commons/images/third-card-image.jpg";
import calendarIcon from "../commons/images/calendar-icon.png";
import AdminModals from "../components/admin-modals";
import * as BuildingsAPI from "../api/buildings-api";
import { AppContext } from "../App";
import ErrorHandler from "../commons/errorhandling/error-handler";
import { getAllBuildings } from "../api/buildings-api";
import CreateAppointmentModal from "../components/create-appointment-modal";

const buildingsInit = {
  id: "",
  type: "",
  building_type: "",
  image: "",
  description: "",
  address: "",
  total_price: "",
  nb_of_rooms: "",
  area: "",
};

function Rent() {
  const { isLoggedIn, isAdmin } = useContext(AppContext);
  const [studioValue, setStudioValue] = useState(new Date());
  const [studiosData, setStudiosData] = useState([]);
  const [apartmentsData, setApartmentsData] = useState([]);
  const [housesData, setHousesData] = useState([]);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const [error, setError] = useState({ status: 0, message: null });

  useEffect(() => {
    getBuildings();
  }, []);

  function setSelectedCard(data) {
    setSelectedCardData((prevState) => data);
  }

  function getBuildings() {
    return BuildingsAPI.getAllBuildings((result, status, err) => {
      if (result !== null && (status === 200 || status === 201)) {
        setStudiosData(() => []);
        setApartmentsData(() => []);
        setHousesData(() => []);
        result.forEach((elem) => {
          if (elem.type === "RENT" && elem.building_type === "STUDIO") {
            // const image = require(elem.image);
            setStudiosData((prevState) => [
              ...prevState,
              <Card className="cardDiv" key={elem.id}>
                <Row className="g-0">
                  <Col md={4} className="colsStyle">
                    {/* De pus imaginile din elem */}
                    <CardImg variant="top" src={thirdCardImage} />
                  </Col>
                  <Col md={8} className="colsStyle">
                    <CardBody>
                      <CardTitle>{elem.description}</CardTitle>
                      <CardText>{elem.address}</CardText>
                      <CardText>
                        {elem.total_price} € | {elem.total_price / elem.area}{" "}
                        €/m² | {elem.nb_of_rooms} camera(e) | {elem.area} m²
                      </CardText>
                      <Button
                        style={{
                          backgroundColor: "#9ACD32",
                          marginRight: "10%",
                        }}
                        key={elem.id + 1}
                        onClick={() => setSelectedCard(elem)}
                      >
                        Select building
                      </Button>
                    </CardBody>
                  </Col>
                </Row>
              </Card>,
            ]);
          } else if (
            elem.type === "RENT" &&
            elem.building_type === "APARTMENT"
          ) {
            // const image = require(elem.image);
            setApartmentsData((prevState) => [
              ...prevState,
              <Card className="cardDiv" key={elem.id}>
                <Row className="g-0">
                  <Col md={4} className="colsStyle">
                    {/* De pus imaginile din elem */}
                    <CardImg variant="top" src={thirdCardImage} />
                  </Col>
                  <Col md={8} className="colsStyle">
                    <CardBody>
                      <CardTitle>{elem.description}</CardTitle>
                      <CardText>{elem.address}</CardText>
                      <CardText>
                        {elem.total_price} € | {elem.total_price / elem.area}{" "}
                        €/m² | {elem.nb_of_rooms} camera(e) | {elem.area} m²
                      </CardText>
                      <Button
                        style={{
                          backgroundColor: "#9ACD32",
                          marginRight: "10%",
                        }}
                        key={elem.id + 1}
                        onClick={() => setSelectedCard(elem)}
                      >
                        Select building
                      </Button>
                    </CardBody>
                  </Col>
                </Row>
              </Card>,
            ]);
          } else if (elem.type === "RENT" && elem.building_type === "HOUSE") {
            // const image = require(elem.image);
            setHousesData((prevState) => [
              ...prevState,
              <Card className="cardDiv" key={elem.id}>
                <Row className="g-0">
                  <Col md={4} className="colsStyle">
                    {/* De pus imaginile din elem */}
                    <CardImg variant="top" src={thirdCardImage} />
                  </Col>
                  <Col md={8} className="colsStyle">
                    <CardBody>
                      <CardTitle>{elem.description}</CardTitle>
                      <CardText>{elem.address}</CardText>
                      <CardText>
                        {elem.total_price} € | {elem.total_price / elem.area}{" "}
                        €/m² | {elem.nb_of_rooms} camera(e) | {elem.area} m²
                      </CardText>
                      <Button
                        style={{
                          backgroundColor: "#9ACD32",
                          marginRight: "10%",
                        }}
                        key={elem.id + 1}
                        onClick={() => setSelectedCard(elem)}
                      >
                        Select building
                      </Button>
                    </CardBody>
                  </Col>
                </Row>
              </Card>,
            ]);
          }
        });
      } else {
        setError(() => ({ status: status, message: err }));
      }
    });
  }

  return (
    <div className="mainDiv">
      <div className="bgrImageDiv1" id="studiosDiv">
        {isAdmin && (
          <AdminModals
            reloadCardValues={getBuildings}
            cardData={selectedCardData}
            setCardData={setSelectedCardData}
          />
        )}
        {isLoggedIn && !isAdmin && (
          <CreateAppointmentModal cardData={selectedCardData} />
        )}
        <div className="headerDiv">
          <p className="header1Style1">IMOBILE DE&nbsp;</p>
          <p className="header1Style2">INCHIRIAT</p>
        </div>
        <p className="header2Style">ANUNTURI GARSONIERE</p>
        <div className="multipleCardsDiv cardsTextStyle">{studiosData}</div>
        {error.status > 0 && (
          <ErrorHandler status={error.status} message={error.message} />
        )}
        <div className="searchDiv">
          <div className="col1Search textSearch">Cauta garsoniere in:</div>
          <div className="col2Search">
            <Input
              className="inputStyle"
              type="text"
              placeholder="Type a city..."
            />
          </div>
          <div className="col3Search textSearch">&nbsp;, in perioada</div>
          <div className="col4Search">
            <img
              src={calendarIcon}
              width={"40vmax"}
              height={"40vmax"}
              alt={"calendar"}
            />
          </div>
          <div className="col5Search">
            <DatePicker
              value={studioValue}
              onChange={setStudioValue}
              format={"yyyy-MM-dd"}
            />
          </div>
          <div className="col6Search">
            <Button style={{ backgroundColor: "#cc506e" }}>Cautare</Button>
          </div>
        </div>
      </div>

      <div className="bgrImageDiv2" id="apartmentsDiv">
        <p className="headerApartmentsHouses">ANUNTURI APARTAMENTE</p>
        <div className="multipleCardsDiv cardsTextStyle">{apartmentsData}</div>
        {error.status > 0 && (
          <ErrorHandler status={error.status} message={error.message} />
        )}
        <div className="searchDiv">
          <div className="col1Search textSearch">Cauta apartamente in:</div>
          <div className="col2Search">
            <Input
              className="inputStyle"
              type="text"
              placeholder="Type a city..."
            />
          </div>
          <div className="col3Search textSearch">&nbsp;, in perioada</div>
          <div className="col4Search">
            <img
              src={calendarIcon}
              width={"40vmax"}
              height={"40vmax"}
              alt={"calendar"}
            />
          </div>
          <div className="col5Search">
            <DatePicker
              value={studioValue}
              onChange={setStudioValue}
              format={"yyyy-MM-dd"}
            />
          </div>
          <div className="col6Search">
            <Button style={{ backgroundColor: "#cc506e" }}>Cautare</Button>
          </div>
        </div>
      </div>

      <div className="bgrImageDiv3" id="housesDiv">
        <p className="headerApartmentsHouses">ANUNTURI CASE</p>
        <div className="multipleCardsDiv cardsTextStyle">{housesData}</div>
        {error.status > 0 && (
          <ErrorHandler status={error.status} message={error.message} />
        )}
        <div className="searchDiv">
          <div className="col1Search textSearch">Cauta case in:</div>
          <div className="col2Search">
            <Input
              className="inputStyle"
              type="text"
              placeholder="Type a city..."
            />
          </div>
          <div className="col3Search textSearch">&nbsp;, in perioada</div>
          <div className="col4Search">
            <img
              src={calendarIcon}
              width={"40vmax"}
              height={"40vmax"}
              alt={"calendar"}
            />
          </div>
          <div className="col5Search">
            <DatePicker
              value={studioValue}
              onChange={setStudioValue}
              format={"yyyy-MM-dd"}
            />
          </div>
          <div className="col6Search">
            <Button style={{ backgroundColor: "#cc506e" }}>Cautare</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Rent;
