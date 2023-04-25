import React, { useState, useContext } from "react";
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
  const { isLoggedIn, setIsLoggedIn, setIsAdmin } = useContext(AppContext);
  const [formIsValid, setFormIsValid] = useState(false);
  const [formValues, setFormValues] = useState(formInit);
  const [passwordType, setPasswordType] = useState("password");

  const [error, setError] = useState(0);

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

  function loginUser(user) { // nu se face request-ul catre be!!!
    return AuthorizationAPI.login(user, (result, status) => {
      if (result !== null && (status === 200 || status === 201)) {
        setIsLoggedIn(true);
        if (result.role === "ADMIN") {
          setIsAdmin(true);
        }
      } else {
        setError(status);
      }
    });
  }

  function handleSubmit() {
    let email = formValues.email.value;
    let password = formValues.password.value;
    loginUser(email, password);
    if (isLoggedIn) {
        toggleModal();
        alert("Logged in successfully!");
    }
    else{
        alert("Could not login!"); // pot face eroarea sa aiba si mesaj, ca in status am mesaje faine de la be, sa le
        // folosesc pe alea!!!
    }
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
          defaultValue={formValues.email.value}
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
          defaultValue={formValues.password.value}
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

      {error > 0 && <ErrorHandler />}
    </div>
  );
}

export default LoginForm;
