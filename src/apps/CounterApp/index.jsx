import React, { useState } from "react";
import { Breadcrumb } from "react-bootstrap";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handleAddCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleMinusCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleResetCount = () => {
    setCount(0);
  };

  // Common button styles as an object
  const buttonStyle = {
    fontSize: "20px",
    fontWeight: 600,
    width: "50px",
    height: "50px",
  };

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
          <h2 style={{ fontFamily: "sans-serif", fontWeight: 600 }}>
            Counter App
          </h2>
          <p style={{ fontSize: "30px", fontWeight: 600 }} className="mt-4">
            {count}
          </p>

          <div className="d-flex gap-3 p-3 ms-3">
            <button
              className="btn btn-secondary rounded-circle p-2"
              style={buttonStyle}
              onClick={handleMinusCount}
            >
              -
            </button>
            <button
              className="btn btn-secondary p-2 rounded-circle"
              style={buttonStyle}
              onClick={handleResetCount}
            >
              0
            </button>
            <button
              className="btn btn-secondary p-2 rounded-circle"
              style={buttonStyle}
              onClick={handleAddCount}
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
