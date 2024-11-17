import React from "react";
import { Breadcrumb } from "react-bootstrap"; // Import the Breadcrumb component

const CounterApp = () => {
  return (
    <>
      {/* Breadcrumb Navigation */}
      <Breadcrumb>
        <Breadcrumb.Item href="/">Main</Breadcrumb.Item>
        <Breadcrumb.Item active>Counter App</Breadcrumb.Item>
      </Breadcrumb>

      {/* Counter App Content */}
      <h2>Total Counts:</h2>
    </>
  );
};

export default CounterApp;
