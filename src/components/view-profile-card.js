import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Col,
  Input,
  Label,
  Row,
} from "reactstrap";
import React, { useEffect, useState } from "react";
import * as AuthorizationAPI from "../api/authorization-api";
import ErrorHandler from "../commons/errorhandling/error-handler";
import Validators from "../validators/validators";

const userDataInit = {
  id: "",
  email: "",
  firstName: {
    value: "",
    valid: false,
    touched: false,
    validationRules: {
      isRequired: true,
      minLength: 2,
    },
  },
  lastName: {
    value: "",
    valid: false,
    touched: false,
    validationRules: {
      isRequired: true,
      minLength: 2,
    },
  },
};

function ViewProfileCard() {
  const [userData, setUserData] = useState(userDataInit);
  const [validFields, setValidFields] = useState(false);
  const [error, setError] = useState({ status: 0, message: null });

  useEffect(() => {
    let id = JSON.parse(localStorage.getItem("loggedUser")).id;
    if (id !== null) {
      getUserData(id);
    }
  }, []);

  function getUserData(id) {
    return AuthorizationAPI.getUserData(id, (result, status, err) => {
      if (result !== null && (status === 200 || status === 201)) {
        let userDataTemp = { ...userData };
        userDataTemp.id = result.id;
        userDataTemp.email = result.email;
        userDataTemp.firstName.value = result.first_name;
        userDataTemp.lastName.value = result.last_name;
        setUserData(() => userDataTemp);
      } else {
        setError(() => ({ status: status, message: err }));
      }
    });
  }

  function updateUser(id, first_name, last_name) {
    return AuthorizationAPI.updateUserData(
      id,
      first_name,
      last_name,
      (status, err) => {
        if (status === 200) {
          let id = JSON.parse(localStorage.getItem("loggedUser")).id;
          if (id !== null) {
            getUserData(id);
          }
        } else {
          setError(() => ({ status: status, message: err }));
        }
      }
    );
  }

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    let updatedValues = { ...userData };
    let updatedFormElement = updatedValues[name];

    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = Validators(
      value,
      updatedFormElement.validationRules
    );
    updatedValues[name] = updatedFormElement;

    let formIsValid =
      updatedValues["firstName"].valid && updatedValues["lastName"].valid;

    setUserData(() => updatedValues);
    setValidFields(() => formIsValid);
  }

  function updateProfile() {
    let id = userData.id;
    let first_name = userData.firstName.value;
    let last_name = userData.lastName.value;

    updateUser(id, first_name, last_name);
    alert("Updated successfully!");
  }

  return (
    <div>
      <Row>
        <Col sm={{ size: "8", offset: 1 }}>
          <CardHeader>
            <strong> User Details: </strong>
          </CardHeader>
          <Card>
            <Label for="idField"> User ID: </Label>
            <Input
              name="idName"
              id="idField"
              value={userData.id}
              type="text"
              disabled
            />
            <Label for="emailField"> Email: </Label>
            <Input
              name="emailName"
              id="emailField"
              value={userData.email}
              type="text"
              disabled
            />
            <Label for="firstNameField"> Firstname: </Label>
            <Input
              name="firstName"
              id="firstNameField"
              value={userData.firstName.value}
              type="text"
              touched={userData.firstName.touched ? 1 : 0}
              valid={userData.firstName.valid}
              onChange={handleChange}
            />
            {userData.firstName.touched && !userData.firstName.valid && (
              <div className={"error-message"}>
                {" "}
                * Firstname must have a valid format (minimum length 2) *{" "}
              </div>
            )}
            <Label for="lastNameField"> Lastname: </Label>
            <Input
              name="lastName"
              id="lastNameField"
              value={userData.lastName.value}
              type="text"
              touched={userData.lastName.touched ? 1 : 0}
              valid={userData.lastName.valid}
              onChange={handleChange}
            />
            {userData.lastName.touched && !userData.lastName.valid && (
              <div className={"error-message"}>
                {" "}
                * Lastname must have a valid format (minimum length 2) *{" "}
              </div>
            )}
          </Card>
          <br />
          <CardFooter style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <Button
                type={"submit"}
                color={"primary"}
                disabled={!validFields}
                onClick={updateProfile}
              >
                {" "}
                Change Data{" "}
              </Button>
            </div>
          </CardFooter>
        </Col>
      </Row>
      {error.status > 0 && (
        <ErrorHandler status={error.status} message={error.message} />
      )}
    </div>
  );
}
export default ViewProfileCard;
