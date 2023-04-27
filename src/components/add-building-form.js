import * as BuildingsAPI from "../api/buildings-api";
import React, { useEffect, useState } from "react";
import Validators from "../validators/validators";
import { Button, FormGroup, Input, Label } from "reactstrap";
import ErrorHandler from "../commons/errorhandling/error-handler";

const formInit = {
  id: {
    value: "",
    valid: true,
  },
  type: {
    value: "",
    placeholder: "RENT or BUY...",
    valid: true,
    touched: false,
    validationRules: {
      isRequired: true,
    },
  },
  image: {
    value: "",
    placeholder: "Image path...",
    valid: true,
    touched: false,
    validationRules: {
      isRequired: true,
      minLength: 1,
    },
  },
  description: {
    value: "",
    placeholder: "Describe the building...",
    valid: true,
    touched: false,
    validationRules: {
      isRequired: true,
      minLength: 7,
    },
  },
  total_price: {
    value: "",
    placeholder: "Total price of building...",
    valid: true,
    touched: false,
    validationRules: {
      isRequired: true,
      minLength: 1,
    },
  },
  nb_of_rooms: {
    value: "",
    placeholder: "Ex: 1 camera...",
    valid: true,
    touched: false,
    validationRules: {
      isRequired: true,
      minLength: 1,
    },
  },
  area: {
    value: "",
    placeholder: "Ex: 55...",
    valid: true,
    touched: false,
    validationRules: {
      isRequired: true,
      minLength: 1,
    },
  },
};

function AddBuildingForm() {
  const [formValues, setFormValues] = useState(formInit);
  const [formIsValid, setFormIsValid] = useState(false);

  const [error, setError] = useState({ status: 0, message: null });

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    let elements = { ...formValues };
    elements["id"].value = cardData.id;
    elements["type"].value = cardData.type;
    elements["image"].value = cardData.image;
    elements["description"].value = cardData.description;
    elements["total_price"].value = cardData.total_price;
    elements["nb_of_rooms"].value = cardData.nb_of_rooms;
    elements["area"].value = cardData.area;

    setFormValues(() => elements);
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
    console.log("is form valid? " + formIsValid);
  }

  function createBuilding(
    id,
    type,
    image,
    description,
    address,
    total_price,
    nb_of_rooms,
    area
  ) {
    return BuildingsAPI.createBuilding(
      id,
      type,
      image,
      description,
      address,
      total_price,
      nb_of_rooms,
      area,
      (result, status, err) => {
        if (result !== null && (status === 200 || status === 201)) {
          reloadCardValues();
        } else {
          setError(() => ({ status: status, message: err }));
        }
      }
    );
  }

  function handleSubmit() {
    let id = formValues.id.value;
    let type = formValues.type.value;
    let image = formValues.image.value;
    let description = formValues.description.value;
    let total_price = formValues.total_price.value;
    let nb_of_rooms = formValues.nb_of_rooms.value;
    let area = formValues.area.value;

    if (type === "RENT" || type === "BUY") {
      updateBuilding(
        id,
        type,
        image,
        description,
        total_price,
        nb_of_rooms,
        area
      );
    }
  }

  return (
    <div>
      <FormGroup id="id">
        <Label for="idField"> ID: </Label>
        <Input
          type={"text"}
          name="id"
          id="idField"
          value={formValues.id.value}
          disabled
        />
      </FormGroup>

      <FormGroup id="type">
        <Label for="typeField"> Type: </Label>
        <Input
          type={"text"}
          name="type"
          id="typeField"
          value={formValues.type.value}
          touched={formValues.type.touched ? 1 : 0}
          valid={formValues.type.valid}
          onChange={handleChange}
        />
        {formValues.type.touched &&
          formValues.type.value !== "RENT" &&
          formValues.type.value !== "BUY" && (
            <div className={"error-message"}>
              {" "}
              * Type must have a valid format: RENT or BUY *{" "}
            </div>
          )}
      </FormGroup>

      <FormGroup id="image">
        <Label for="imageField"> Image: </Label>
        <Input
          type={"text"}
          name="image"
          id="imageField"
          value={formValues.image.value}
          touched={formValues.image.touched ? 1 : 0}
          valid={formValues.image.valid}
          onChange={handleChange}
        />
        {formValues.image.touched && !formValues.image.valid && (
          <div className={"error-message"}>
            {" "}
            * Image must have a valid format *{" "}
          </div>
        )}
      </FormGroup>

      <FormGroup id="description">
        <Label for="descriptionField"> Description: </Label>
        <Input
          type={"text"}
          name="description"
          id="descriptionField"
          value={formValues.description.value}
          touched={formValues.description.touched ? 1 : 0}
          valid={formValues.description.valid}
          onChange={handleChange}
        />
        {formValues.description.touched && !formValues.description.valid && (
          <div className={"error-message"}>
            {" "}
            * Description must have a valid format *{" "}
          </div>
        )}
      </FormGroup>

      <FormGroup id="total_price">
        <Label for="total_priceField"> Total price: </Label>
        <Input
          type={"text"}
          name="total_price"
          id="total_priceField"
          value={formValues.total_price.value}
          touched={formValues.total_price.touched ? 1 : 0}
          valid={formValues.total_price.valid}
          onChange={handleChange}
        />
        {formValues.total_price.touched && !formValues.total_price.valid && (
          <div className={"error-message"}>
            {" "}
            * Total price must have a valid format *{" "}
          </div>
        )}
      </FormGroup>

      <FormGroup id="nb_of_rooms">
        <Label for="nb_of_roomsField"> Number of rooms: </Label>
        <Input
          type={"text"}
          name="nb_of_rooms"
          id="nb_of_roomsField"
          value={formValues.nb_of_rooms.value}
          touched={formValues.nb_of_rooms.touched ? 1 : 0}
          valid={formValues.nb_of_rooms.valid}
          onChange={handleChange}
        />
        {formValues.nb_of_rooms.touched && !formValues.nb_of_rooms.valid && (
          <div className={"error-message"}>
            {" "}
            * Number of rooms must have a valid format *{" "}
          </div>
        )}
      </FormGroup>

      <FormGroup id="area">
        <Label for="areaField"> Area: </Label>
        <Input
          type={"text"}
          name="area"
          id="areaField"
          value={formValues.area.value}
          touched={formValues.area.touched ? 1 : 0}
          valid={formValues.area.valid}
          onChange={handleChange}
        />
        {formValues.area.touched && !formValues.area.valid && (
          <div className={"error-message"}>
            {" "}
            * Area must have a valid format *{" "}
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
          Edit building{" "}
        </Button>
      </div>

      {error.status > 0 && (
        <ErrorHandler status={error.status} message={error.message} />
      )}
    </div>
  );
}
export default AddBuildingForm;
