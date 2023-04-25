import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import LoginForm from "./login-form";

function LoginModal() {
  const [isSelected, setIsSelected] = useState(false);

  function toggleIsSelected() {
    setIsSelected(!isSelected);
  }

  return (
    <div>
      <Button
        type="button"
        style={{ backgroundColor: "#9ACD32", marginRight: "10%" }}
        onClick={toggleIsSelected}
      >
        Login
      </Button>
      <Modal isOpen={isSelected} toggle={toggleIsSelected} size="lg">
        <ModalHeader toggle={toggleIsSelected}>
          {" "}
          Login to your account:{" "}
        </ModalHeader>
        <ModalBody>
          <LoginForm toggleModal={toggleIsSelected}/>
        </ModalBody>
      </Modal>
    </div>
  );
}
export default LoginModal;
