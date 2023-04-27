import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import LoginForm from "./login-form";
import EditBuildingForm from "./edit-building-form";

function AdminModals({ reloadCardValues, cardData }) {
  const [isSelectedAdd, setIsSelectedAdd] = useState(false);
  const [isSelectedDelete, setIsSelectedDelete] = useState(false);
  const [isSelectedEdit, setIsSelectedEdit] = useState(false);

  function toggleIsSelectedAdd() {
    setIsSelectedAdd(!isSelectedAdd);
  }

  function toggleIsSelectedDelete() {
    setIsSelectedDelete(!isSelectedDelete);
  }

  function toggleIsSelectedEdit() {
    if (cardData !== null) {
      setIsSelectedEdit(!isSelectedEdit);
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
              <strong> Buildings administration: </strong>
            </CardHeader>
            <Button
              type="button"
              style={{
                backgroundColor: "#9ACD32",
                alignSelf: "center",
                margin: "0 1% 0 1%",
              }}
              onClick={toggleIsSelectedAdd}
            >
              Add building
            </Button>
            <Modal
              isOpen={isSelectedAdd}
              toggle={toggleIsSelectedAdd}
              size="lg"
            >
              <ModalHeader toggle={toggleIsSelectedAdd}>
                {" "}
                Add a new building:{" "}
              </ModalHeader>
              <ModalBody></ModalBody>
            </Modal>

            <Button
              type="button"
              style={{
                backgroundColor: "#9ACD32",
                alignSelf: "center",
                margin: "0 1% 0 1%",
              }}
              onClick={toggleIsSelectedDelete}
            >
              Delete building
            </Button>
            <Modal
              isOpen={isSelectedDelete}
              toggle={toggleIsSelectedDelete}
              size="lg"
            >
              <ModalHeader toggle={toggleIsSelectedDelete}>
                {" "}
                Delete a building:{" "}
              </ModalHeader>
              <ModalBody></ModalBody>
            </Modal>

            <Button
              type="button"
              style={{
                backgroundColor: "#9ACD32",
                alignSelf: "center",
                margin: "0 1% 0 1%",
              }}
              onClick={toggleIsSelectedEdit}
            >
              Edit building
            </Button>
            <Modal
              isOpen={isSelectedEdit}
              toggle={toggleIsSelectedEdit}
              size="lg"
            >
              <ModalHeader toggle={toggleIsSelectedEdit}>
                {" "}
                Edit a building:{" "}
              </ModalHeader>
              <ModalBody>
                {" "}
                <EditBuildingForm
                  reloadCardValues={reloadCardValues}
                  cardData={cardData}
                />
              </ModalBody>
            </Modal>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default AdminModals;
