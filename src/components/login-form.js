import React, { useState, useContext, useEffect } from "react";
import { FormGroup, Input, Label, Button } from "reactstrap";

import Validators from "../validators/validators";
import ErrorHandler from "../commons/errorhandling/error-handler";
import * as AuthorizationAPI from "../api/authorization-api";
import { AppContext } from "../App";

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
};

function LoginForm({ toggleModal }) {
  const { setIsLoggedIn, setIsAdmin } = useContext(AppContext);
  const [formIsValid, setFormIsValid] = useState(false);
  const [formValues, setFormValues] = useState(formInit);
  const [passwordType, setPasswordType] = useState("password");

  const [error, setError] = useState({ status: 0, message: null });

  useEffect(() => {
    resetFields();
  }, []);

  function resetFields() {
    let elements = { ...formValues };
    elements["email"].value = "";
    elements["password"].value = "";
    elements["email"].valid = false;
    elements["email"].touched = false;
    elements["password"].valid = false;
    elements["password"].touched = false;
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

  function loginUser(email, password) {
    return AuthorizationAPI.login(email, password, (result, status, err) => {
      if (result !== null && (status === 200 || status === 201)) {
        let userData = {
          id: result.id,
          role: result.role,
        };
        localStorage.setItem("loggedUser", JSON.stringify(userData));
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        setIsLoggedIn(true);
        if (result.role === "ADMIN") {
          localStorage.setItem("isAdmin", JSON.stringify(true));
          setIsAdmin(true);
        }
        toggleModal();
      } else {
        setError(() => ({ status: status, message: err }));
      }
    });
  }

  function handleSubmit() {
    let email = formValues.email.value;
    let password = formValues.password.value;
    loginUser(email, password);
    resetFields();
  }

  function togglePassword() {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
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
          // defaultValue={formValues.email.value}
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
          // defaultValue={formValues.password.value}
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

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          type={"submit"}
          color={"primary"}
          disabled={!formIsValid}
          onClick={handleSubmit}
        >
          {" "}
          Login{" "}
        </Button>
      </div>

      {error.status > 0 && (
        <ErrorHandler status={error.status} message={error.message} />
      )}
    </div>
  );
}

export default LoginForm;
