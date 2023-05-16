import { Button, FormGroup, Input, Label } from "reactstrap";
import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import * as AppointmentAPI from "../api/appointments-api";
import ErrorHandler from "../commons/errorhandling/error-handler";

const formInit = {
  id: {
    value: "",
  },
  type: {
    value: "",
  },
  address: {
    value: "",
  },
  image: {
    value: "",
  },
  description: {
    value: "",
  },
  total_price: {
    value: "",
  },
  nb_of_rooms: {
    value: "",
  },
  area: {
    value: "",
  },
};

function CreateAppointmentForm({ cardData, toggleModal }) {
  const [formValues, setFormValues] = useState(formInit);
  const [appDate, setAppDate] = useState(new Date());
  const [appTime, setAppTime] = useState(
    new Date().getHours() + ":" + new Date().getMinutes()
  );

  const [error, setError] = useState({ status: 0, message: null });

  useEffect(() => {
    getAppData();
  }, []);

  function getAppData() {
    let elements = { ...formValues };
    elements["id"].value = cardData.id;
    elements["type"].value = cardData.type;
    elements["address"].value = cardData.address;
    //let image = require(cardData.image); // de vazut!!!
    elements["image"].value = cardData.image;
    elements["description"].value = cardData.description;
    elements["total_price"].value = cardData.total_price;
    elements["nb_of_rooms"].value = cardData.nb_of_rooms;
    elements["area"].value = cardData.area;

    setFormValues(() => elements);
  }

  function makeAppointmentForClient(building_id, user_id, app_date, app_time) {
    return AppointmentAPI.makeAppointment(
      building_id,
      user_id,
      app_date,
      app_time,
      (result, status, err) => {
        if (result !== null && status === 200) {
          toggleModal();
        } else {
          setError(() => ({ status: status, message: err }));
        }
      }
    );
  }

  function handleSubmit() {
    let building_id = formValues.id.value;
    let user_id = JSON.parse(localStorage.getItem("loggedUser")).id;
    let day = Number(appDate.toISOString().substr(8, 2)) + 1;
    let app_date = appDate.toISOString().substr(0, 8) + String(day);
    makeAppointmentForClient(building_id, user_id, app_date, appTime);
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
        <Label for="typeField"> Building type: </Label>
        <Input
          type={"text"}
          name="type"
          id="typeField"
          value={formValues.type.value}
          disabled
        />
      </FormGroup>

      <FormGroup id="address">
        <Label for="addressField"> Building Address: </Label>
        <Input
          type={"text"}
          name="address"
          id="addressField"
          value={formValues.address.value}
          disabled
        />
      </FormGroup>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Label for="imageField"> Building Image: </Label>
        <img src={formValues.image.value} alt={"building icon"} />
      </div>

      <FormGroup id="description">
        <Label for="descriptionField"> Description: </Label>
        <Input
          type={"text"}
          name="description"
          id="descriptionField"
          value={formValues.description.value}
          disabled
        />
      </FormGroup>

      <FormGroup id="total_price">
        <Label for="total_priceField"> Total Price: </Label>
        <Input
          type={"text"}
          name="total_price"
          id="total_priceField"
          value={formValues.total_price.value}
          disabled
        />
      </FormGroup>

      <FormGroup id="nb_of_rooms">
        <Label for="nb_of_roomsField"> No. of Rooms: </Label>
        <Input
          type={"text"}
          name="nb_of_rooms"
          id="nb_of_roomsField"
          value={formValues.nb_of_rooms.value}
          disabled
        />
      </FormGroup>

      <FormGroup id="area">
        <Label for="areaField"> Area: </Label>
        <Input
          type={"text"}
          name="area"
          id="areaField"
          value={formValues.area.value}
          disabled
        />
      </FormGroup>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 0 1% 0",
          }}
        >
          <Label for="appDateField"> Appointment Date: </Label>
          <DatePicker
            id="appDateField"
            value={appDate}
            onChange={setAppDate}
            format={"yyyy-MM-dd"}
            valid={appDate !== null}
          />
          {appDate === null && (
            <div className={"error-message"}>
              {" "}
              * Appointment date is required *{" "}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 0 4% 0",
          }}
        >
          <Label> Appointment Time: </Label>
          <TimePicker
            value={appTime}
            onChange={setAppTime}
            valid={appTime !== null}
          />
          {appTime === null && (
            <div className={"error-message"}>
              {" "}
              * Appointment time is required *{" "}
            </div>
          )}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          type={"submit"}
          color={"primary"}
          disabled={appDate === null || appTime === null}
          onClick={handleSubmit}
        >
          {" "}
          Create appointment{" "}
        </Button>
      </div>

      {error.status > 0 && (
        <ErrorHandler status={error.status} message={error.message} />
      )}
    </div>
  );
}
export default CreateAppointmentForm;
