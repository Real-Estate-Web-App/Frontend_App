import {
  Button,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import AddBuildingForm from "./add-building-form";
import EditBuildingForm from "./edit-building-form";
import React, { useState } from "react";
import CreateAppointmentForm from "./create-appointment-form";

function CreateAppointmentModal({ cardData, setCardData }) {
  const [isSelected, setIsSelected] = useState(false);

  function toggleIsSelected() {
    console.log(cardData);
    if (cardData !== null) {
      setIsSelected(!isSelected);
    } else {
      alert("You have to select a card first!");
    }
  }

  return (
    <div>
      <Row>
        <Col sm={{ size: "8", offset: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2% 0 0 0",
              color: "#000000",
              textShadow: "2px 2px #9ACD32",
              fontSize: "1vmax",
              padding: "0 1vmax 0 10vmax",
            }}
          >
            <CardHeader style={{ alignSelf: "center" }}>
              <strong> Make an appointment to visit a building: </strong>
            </CardHeader>
            <Button
              type="button"
              style={{
                backgroundColor: "#9ACD32",
                alignSelf: "center",
                margin: "0 1% 0 1%",
              }}
              onClick={toggleIsSelected}
            >
              Make appointment
            </Button>
            <Modal isOpen={isSelected} toggle={toggleIsSelected} size="lg">
              <ModalHeader toggle={toggleIsSelected}>
                {" "}
                Make an appointment:{" "}
              </ModalHeader>
              <ModalBody>
                <CreateAppointmentForm
                  cardData={cardData}
                  toggleModal={toggleIsSelected}
                  setCardData={setCardData}
                />
              </ModalBody>
            </Modal>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default CreateAppointmentModal;
