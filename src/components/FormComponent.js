import React from "react";

const FormComponent = (props) => {
  return (
    <>
      {props.form.map((frm, i, arr) => {
        return (
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <label>{frm.label}</label>
                <input type={frm.type} className="form-control" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FormComponent;
