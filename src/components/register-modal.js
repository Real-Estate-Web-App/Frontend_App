import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import RegisterForm from "./register-form";

function RegisterModal() {
  const [isSelected, setIsSelected] = useState(false);

  function toggleIsSelected() {
    setIsSelected(!isSelected);
  }

  return (
    <div>
      <Button
        type="button"
        style={{ backgroundColor: "#cc506e", marginLeft: "10%" }}
        onClick={toggleIsSelected}
      >
        Register
      </Button>
      <Modal isOpen={isSelected} toggle={toggleIsSelected} size="lg">
        <ModalHeader toggle={toggleIsSelected}>
          {" "}
          Create an account:{" "}
        </ModalHeader>
        <ModalBody>
          <RegisterForm toggleModal={toggleIsSelected} />
        </ModalBody>
      </Modal>
    </div>
  );
}
export default RegisterModal;
