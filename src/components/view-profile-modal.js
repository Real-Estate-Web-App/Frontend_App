import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import ViewProfileCard from "./view-profile-card";

function ViewProfileModal() {
  const [isSelected, setIsSelected] = useState(false);

  function toggleIsSelected() {
    setIsSelected(!isSelected);
  }

  return (
    <div>
      <Button
        type="button"
        style={{ backgroundColor: "#cc506e", marginRight: "10%" }}
        onClick={toggleIsSelected}
      >
        Profile
      </Button>
      <Modal isOpen={isSelected} toggle={toggleIsSelected} size="lg">
        <ModalHeader toggle={toggleIsSelected}>
          {" "}
          Your account information:{" "}
        </ModalHeader>
        <ModalBody>
          <ViewProfileCard />
        </ModalBody>
      </Modal>
    </div>
  );
}
export default ViewProfileModal;
