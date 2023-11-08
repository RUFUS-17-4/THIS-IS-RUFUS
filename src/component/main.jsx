import React from "react";

function Main() {
  const mainStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const formContainerStyles = {
    border: "2px solid #333",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f1f2f3",
  };

  const formStyles = {
    display: "flex",
    flexDirection: "column",
  };

  const formGroupStyles = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  };

  const inputStyles = {
    margin: "0 10px 0 0",
  };

  return (
    <div style={mainStyles}>
      <div style={formContainerStyles} className="main">
        <form style={formStyles}>
          <div style={formGroupStyles}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" style={inputStyles} />
          </div>
          <div style={formGroupStyles}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              style={inputStyles}
            />
          </div>
          <button type="submit">Start</button>
        </form>
      </div>
    </div>
  );
}

export default Main;