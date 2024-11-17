import React from "react";
import { Breadcrumb } from "react-bootstrap"; // Import the Breadcrumb component

const CounterApp = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Main</Breadcrumb.Item>
        <Breadcrumb.Item active>Counter App</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          backgroundColor: "rgba(242, 242, 242, 0.8)",
        }}
      >
        <div className="text-center">
          {/* Breadcrumb Navigation */}

          {/* Counter App Content */}
          <h2 style={{ fontFamily: "sans-serif", fontWeight: 600 }}>
            Counter App
          </h2>
          <p style={{ fontSize: "30px", fontWeight: 600 }} className="mt-4">
            0
          </p>
          <div className="d-flex gap-3 p-3 ms-3">
            <button
              className="btn btn-secondary rounded-circle p-2"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                width: "50px",
                height: "50px",
              }}
            >
              -
            </button>
            <button
              className="btn btn-secondary p-2 rounded-circle"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                width: "50px",
                height: "50px",
              }}
            >
              0
            </button>
            <button
              className="btn btn-secondary p-2 rounded-circle"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                width: "50px",
                height: "50px",
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterApp;
