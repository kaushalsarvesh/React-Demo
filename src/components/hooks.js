import React, { useState, useEffect } from "react";

const HooksComponent = () => {
  const [firstName, setFirstName] = useState("");

  const changeHandle = (e) => {
    setFirstName(e.target.vale);
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="form-group">
            <label>Enter First Name</label>

            <input
              type="text"
              className="form-control"
              onChange={(e) => changeHandle(e, "firstName")}
              value={firstName}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HooksComponent;
