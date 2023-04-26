import React, { useState, useEffect } from "react";
import { FormGroup, Input, Label, Button } from "reactstrap";

import Validators from "../validators/validators";
import ErrorHandler from "../commons/errorhandling/error-handler";
import * as AuthorizationAPI from "../api/authorization-api";

const formInit = {
  email: {
    value: "",
    placeholder: "Ex: nume@domeniu.com...",
    valid: false,
    touched: false,
    validationRules: {
      emailValidator: true,
    },
  },
  password: {
    value: "",
    placeholder: "Password...",
    valid: false,
    touched: false,
    validationRules: {
      isRequired: true,
      minLength: 7,
    },
  },
  confirmPassword: {
    value: "",
    placeholder: "Enter your password one last time...",
    valid: false,
    touched: false,
    validationRules: {
      isRequired: true,
      minLength: 7,
    },
  },
  firstName: {
    value: "",
    placeholder: "Enter your firstname...",
    valid: false,
    touched: false,
    validationRules: {
      isRequired: true,
      minLength: 2,
    },
  },
  lastName: {
    value: "",
    placeholder: "Enter your lastname...",
    valid: false,
    touched: false,
    validationRules: {
      isRequired: true,
      minLength: 2,
    },
  },
};

function RegisterForm({ toggleModal }) {
  const [formValues, setFormValues] = useState(formInit);
  const [formIsValid, setFormIsValid] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const [error, setError] = useState({ status: 0, message: null });

  useEffect(() => {
    resetFields();
  }, []);

  function resetFields() {
    let elements = { ...formValues };
    elements["email"].value = "";
    elements["password"].value = "";
    elements["confirmPassword"].value = "";
    elements["firstName"].value = "";
    elements["lastName"].value = "";
    elements["email"].valid = false;
    elements["email"].touched = false;
    elements["password"].valid = false;
    elements["password"].touched = false;
    elements["confirmPassword"].valid = false;
    elements["confirmPassword"].touched = false;
    elements["firstName"].valid = false;
    elements["firstName"].touched = false;
    elements["lastName"].valid = false;
    elements["lastName"].touched = false;
    setFormValues(() => elements);

    let formIsValid = false;
    setFormIsValid(() => formIsValid);
  }

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    let updatedValues = { ...formValues };

    let updatedFormElement = updatedValues[name];

    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = Validators(
      value,
      updatedFormElement.validationRules
    );
    updatedValues[name] = updatedFormElement;

    let formIsValid = true;
    for (let updatedFormElementName in updatedValues) {
      formIsValid = updatedValues[updatedFormElementName].valid && formIsValid;
    }

    setFormValues(() => updatedValues);
    setFormIsValid(() => formIsValid);
  }

  function registerUser(email, password, first_name, last_name) {
    return AuthorizationAPI.register(
      email,
      password,
      first_name,
      last_name,
      (result, status, err) => {
        if (result !== null && (status === 200 || status === 201)) {
          // afisez butonul de register doar daca nu sunt logged in; dupa logare, il scot, ca nu vreau sa pot da register
          // in timp ce sunt logat;
          toggleModal();
        } else {
          setError(() => ({ status: status, message: err }));
        }
      }
    );
  }

  function handleSubmit() {
    let email = formValues.email.value;
    let password = formValues.password.value;
    let confirmPassword = formValues.confirmPassword.value;
    let first_name = formValues.firstName.value;
    let last_name = formValues.lastName.value;

    if (password === confirmPassword) {
      registerUser(email, password, first_name, last_name);
      resetFields();
    }
  }

  function togglePassword() {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }

  function toggleConfirmPassword() {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
    } else {
      setConfirmPasswordType("password");
    }
  }

  return (
    <div>
      <FormGroup id="email">
        <Label for="emailField"> Email: </Label>
        <Input
          type={"text"}
          name="email"
          id="emailField"
          placeholder={formValues.email.placeholder}
          onChange={handleChange}
          value={formValues.email.value}
          touched={formValues.email.touched ? 1 : 0}
          valid={formValues.email.valid}
          required
        />
        {formValues.email.touched && !formValues.email.valid && (
          <div className={"error-message"}>
            {" "}
            * Email must have a valid format *{" "}
          </div>
        )}
      </FormGroup>

      <FormGroup id="password">
        <Label for="passwordField"> Password: &nbsp; </Label>
        <Input type={"checkbox"} onClick={togglePassword} />
        <Input
          type={passwordType}
          name="password"
          id="passwordField"
          placeholder={formValues.password.placeholder}
          onChange={handleChange}
          value={formValues.password.value}
          touched={formValues.password.touched ? 1 : 0}
          valid={formValues.password.valid}
          required
        />
        {formValues.password.touched && !formValues.password.valid && (
          <div className={"error-message"}>
            {" "}
            * Password must have a valid format *{" "}
          </div>
        )}
      </FormGroup>

      <FormGroup id="confirmPassword">
        <Label for="confirmPasswordField"> Confirm Password: &nbsp; </Label>
        <Input type={"checkbox"} onClick={toggleConfirmPassword} />
        <Input
          type={confirmPasswordType}
          name="confirmPassword"
          id="confirmPasswordField"
          placeholder={formValues.confirmPassword.placeholder}
          onChange={handleChange}
          value={formValues.confirmPassword.value}
          touched={formValues.confirmPassword.touched ? 1 : 0}
          valid={formValues.confirmPassword.valid}
          required
        />
        {formValues.confirmPassword.touched &&
          !formValues.confirmPassword.valid &&
          formValues.password.value !== formValues.confirmPassword.value && (
            <div className={"error-message"}>
              {" "}
              * Password must have a valid format *{" "}
            </div>
          )}
        {formValues.password.value !== formValues.confirmPassword.value && (
          <div className={"error-message"}>
            {" "}
            * Passwords must be the same to proceed registration *{" "}
          </div>
        )}
      </FormGroup>

      <FormGroup id="firstName">
        <Label for="firstNameField"> Firstname: </Label>
        <Input
          type={"text"}
          name="firstName"
          id="firstNameField"
          placeholder={formValues.firstName.placeholder}
          onChange={handleChange}
          value={formValues.firstName.value}
          touched={formValues.firstName.touched ? 1 : 0}
          valid={formValues.firstName.valid}
          required
        />
        {formValues.firstName.touched && !formValues.firstName.valid && (
          <div className={"error-message"}>
            {" "}
            * Firstname must have a valid format *{" "}
          </div>
        )}
      </FormGroup>

      <FormGroup id="lastName">
        <Label for="lastNameField"> Lastname: </Label>
        <Input
          type={"text"}
          name="lastName"
          id="lastNameField"
          placeholder={formValues.lastName.placeholder}
          onChange={handleChange}
          value={formValues.lastName.value}
          touched={formValues.lastName.touched ? 1 : 0}
          valid={formValues.lastName.valid}
          required
        />
        {formValues.lastName.touched && !formValues.lastName.valid && (
          <div className={"error-message"}>
            {" "}
            * Lastname must have a valid format *{" "}
          </div>
        )}
      </FormGroup>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          type={"submit"}
          color={"primary"}
          disabled={!formIsValid}
          onClick={handleSubmit}
        >
          {" "}
          Sign up{" "}
        </Button>
      </div>

      {error.status > 0 && (
        <ErrorHandler status={error.status} message={error.message} />
      )}
    </div>
  );
}

export default RegisterForm;
