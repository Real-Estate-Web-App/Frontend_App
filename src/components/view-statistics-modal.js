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
      name: "appointments",
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

          Object.entries(result).map(([day, value]) => {
            days.push(day);
            values.push(value);
          });

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
                name: "appointments",
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
    let currentMonth = new Date().getMonth() + 1;
    if (currentMonth < 10) {
      currentMonth = "0" + currentMonth;
    }
    getStatisticsForMonth(building_id, currentMonth);
  }

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Button
        type="button"
        style={{
          backgroundColor: "#cc506e",
          alignSelf: "center",
        }}
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
          {data.series[0].data.length !== 0 &&
            data.options.xaxis.categories.length !== 0 && (
              <Chart
                options={data.options}
                series={data.series}
                type="bar"
                width={"100%"}
                height={"100%"}
              />
            )}
          {data.series[0].data.length === 0 &&
            data.options.xaxis.categories.length === 0 && (
              <p>Nothing to show for the current month</p>
            )}

          {error.status > 0 && (
            <ErrorHandler status={error.status} message={error.message} />
          )}
        </ModalBody>
      </Modal>
    </div>
  );
}
export default ViewStatisticsModal;
