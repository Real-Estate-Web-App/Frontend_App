import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import Chart from "react-apexcharts";
import * as AppointmentsAPI from "../api/appointments-api";
import ErrorHandler from "../commons/errorhandling/error-handler";

const initialData = {
  options: {
    chart: {
      id: "energy-chart",
    },
    xaxis: {
      categories: [],
    },
  },
  series: [
    {
      name: "series-1",
      data: [],
    },
  ],
};

function ViewStatisticsModal({ building_id }) {
  const [isSelected, setIsSelected] = useState(false);
  const [data, setData] = useState(initialData);

  const [error, setError] = useState({ status: 0, message: null });

  function toggleIsSelected() {
    setIsSelected(!isSelected);
  }

  function getStatisticsForMonth(building_id, month) {
    return AppointmentsAPI.getAllAppointmentsForMonth(
      building_id,
      month,
      (result, status, err) => {
        if (result !== null && status === 200) {
          let days = [];
          let values = [];
          // TO DO: process received data;
          const newData = {
            options: {
              chart: {
                id: "energy-chart",
              },
              xaxis: {
                categories: days,
              },
            },
            series: [
              {
                name: "series-1",
                data: values,
              },
            ],
          };
          setData(newData);
        } else {
          setError(() => ({ status: status, message: err }));
        }
      }
    );
  }

  function handleSubmit() {
    toggleIsSelected();
    let currentMonth = new Date().getMonth();
    getStatisticsForMonth(building_id, currentMonth);
  }

  return (
    <div>
      <Button
        type="button"
        style={{ backgroundColor: "#cc506e", marginRight: "10%" }}
        onClick={handleSubmit}
      >
        View statistics
      </Button>
      <Modal isOpen={isSelected} toggle={toggleIsSelected} size="lg">
        <ModalHeader toggle={toggleIsSelected}>
          {" "}
          This month's appointments:{" "}
        </ModalHeader>
        <ModalBody>
          <Chart
            options={data.options}
            series={data.series}
            type="bar"
            width={500}
            height={320}
          />
          {error.status > 0 && (
            <ErrorHandler status={error.status} message={error.message} />
          )}
        </ModalBody>
      </Modal>
    </div>
  );
}
export default ViewStatisticsModal;
