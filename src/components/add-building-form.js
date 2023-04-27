import * as BuildingsAPI from "../api/buildings-api";
import React, { useEffect, useState } from "react";
import Validators from "../validators/validators";
import { Button, FormGroup, Input, Label } from "reactstrap";
import ErrorHandler from "../commons/errorhandling/error-handler";

const formInit = {
  type: {
    value: "",
    placeholder: "RENT or BUY...",
    valid: true,
    touched: false,
    validationRules: {
      isRequired: true,
    },
  },
  building_type: {
    value: "",
    placeholder: "STUDIO, APARTMENT or HOUSE...",
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
  address: {
    value: "",
    placeholder: "The building address...",
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

function AddBuildingForm({ reloadCardValues, toggleModal }) {
  const [formValues, setFormValues] = useState(formInit);
  const [formIsValid, setFormIsValid] = useState(false);

  const [error, setError] = useState({ status: 0, message: null });

  useEffect(() => {
    resetFields();
  }, []);

  function resetFields() {
    let elements = { ...formValues };
    elements["type"].value = "";
    elements["building_type"].value = "";
    elements["image"].value = "";
    elements["description"].value = "";
    elements["address"].value = "";
    elements["total_price"].value = "";
    elements["nb_of_rooms"].value = "";
    elements["area"].value = "";

    elements["type"].valid = false;
    elements["building_type"].valid = false;
    elements["image"].valid = false;
    elements["description"].valid = false;
    elements["address"].valid = false;
    elements["total_price"].valid = false;
    elements["nb_of_rooms"].valid = false;
    elements["area"].valid = false;

    elements["type"].touched = false;
    elements["building_type"].touched = false;
    elements["image"].touched = false;
    elements["description"].touched = false;
    elements["address"].touched = false;
    elements["total_price"].touched = false;
    elements["nb_of_rooms"].touched = false;
    elements["area"].touched = false;

    setFormValues(() => elements);
    setFormIsValid(() => false);
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
          toggleModal();
          reloadCardValues();
        } else {
          setError(() => ({ status: status, message: err }));
        }
      }
    );
  }

  function handleSubmit() {
    let type = formValues.type.value;
    let building_type = formValues.building_type.value;
    let image = formValues.image.value;
    let description = formValues.description.value;
    let address = formValues.address.value;
    let total_price = formValues.total_price.value;
    let nb_of_rooms = formValues.nb_of_rooms.value;
    let area = formValues.area.value;

    if (
      (type === "RENT" || type === "BUY") &&
      (building_type === "STUDIO" ||
        building_type === "APARTMENT" ||
        building_type === "HOUSE")
    ) {
      createBuilding(
        type,
        building_type,
        image,
        description,
        address,
        total_price,
        nb_of_rooms,
        area
      );
    }
  }

  return (
    <div>
      <FormGroup id="type">
        <Label for="typeField"> Type: </Label>
        <Input
          type={"text"}
          name="type"
          id="typeField"
          value={formValues.type.value}
          placeholder={formValues.type.placeholder}
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

      <FormGroup id="building_type">
        <Label for="building_typeField"> Building type: </Label>
        <Input
          type={"text"}
          name="building_type"
          id="building_typeField"
          value={formValues.building_type.value}
          placeholder={formValues.building_type.placeholder}
          touched={formValues.building_type.touched ? 1 : 0}
          valid={formValues.building_type.valid}
          onChange={handleChange}
        />
        {formValues.building_type.touched &&
          formValues.building_type.value !== "STUDIO" &&
          formValues.building_type.value !== "APARTMENT" &&
          formValues.building_type.value !== "HOUSE" && (
            <div className={"error-message"}>
              {" "}
              * Building type must have a valid format: STUDIO, APARTMENT or
              HOUSE *{" "}
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
          placeholder={formValues.image.placeholder}
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
          placeholder={formValues.description.placeholder}
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

      <FormGroup id="address">
        <Label for="addressField"> Address: </Label>
        <Input
          type={"text"}
          name="address"
          id="addressField"
          value={formValues.address.value}
          placeholder={formValues.address.placeholder}
          touched={formValues.address.touched ? 1 : 0}
          valid={formValues.address.valid}
          onChange={handleChange}
        />
        {formValues.address.touched && !formValues.address.valid && (
          <div className={"error-message"}>
            {" "}
            * Address must have a valid format *{" "}
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
          placeholder={formValues.total_price.placeholder}
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
          placeholder={formValues.nb_of_rooms.placeholder}
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
          placeholder={formValues.area.placeholder}
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
          Add building{" "}
        </Button>
      </div>

      {error.status > 0 && (
        <ErrorHandler status={error.status} message={error.message} />
      )}
    </div>
  );
}
export default AddBuildingForm;
