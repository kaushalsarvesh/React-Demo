import React from "react";
import ListComponent from "./ListComponent";
import FormComponent from "./FormComponent";

class CreditForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    list: [],
    isUpdate: false,
    updateIndex: -1,
  };

  componentWillMount() {
    let localData = JSON.parse(localStorage.getItem("data"));
    if (!localData) {
      localStorage.setItem("data", JSON.stringify([]));
    } else {
      this.setState({ list: localData });
    }
  }

  changeHandle = (e, key) => {
    this.setState({
      [key]: e.target.value,
    });
  };

  submitHandle = (e) => {
    let localData = JSON.parse(localStorage.getItem("data"));
    localData.push(this.state);
    localStorage.setItem("data", JSON.stringify(localData));
    this.setState({
      firstName: "",
      lastName: "",
      list: localData,
    });
  };

  clickHandler = (index) => {
    var { list } = { ...this.state };
    if (window.confirm(`Do you want to delete ${list[index].firstName}`)) {
      list.splice(index, 1);
      this.setState({
        list,
      });
      localStorage.setItem("data", JSON.stringify(list));
    }
  };

  editHandler = (index) => {
    const { firstName, lastName } = this.state.list[index];
    this.setState({
      firstName,
      lastName,
      isUpdate: true,
      updateIndex: index,
    });
  };

  updateHandler = (e) => {
    const { updateIndex, list, firstName, lastName } = { ...this.state };
    list[updateIndex] = {
      firstName,
      lastName,
    };
    this.setState({
      list,
      isUpdate: false,
      updateIndex: -1,
    });
    localStorage.setItem("data", JSON.stringify(list));
  };

  render() {
    const { list, firstName, lastName, isUpdate } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h2 className="head1">Your Payment Information</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <label>Enter First Name</label>

              <input
                type="text"
                className="form-control"
                onChange={(e) => this.changeHandle(e, "firstName")}
                value={firstName}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <label>Enter Last Name</label>

              <input
                type="text"
                className="form-control"
                onChange={(e) => this.changeHandle(e, "lastName")}
                value={lastName}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              {isUpdate ? (
                <button
                  type="button"
                  onClick={(e) => this.updateHandler(e)}
                  className="btn btn-primary"
                >
                  Update
                </button>
              ) : (
                <button
                  type="button"
                  onClick={(e) => this.submitHandle(e)}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <ListComponent
              list={list}
              deleteHandler={this.clickHandler}
              editHandler={this.editHandler}
            />
            {/* <table border="1" className="table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {list.length &&
                  list.map((v, i) => {
                    return (
                      <tr key={i}>
                        <td>{v.firstName}</td>
                        <td>{v.lastName}</td>
                        <td>
                          <button onClick={(e) => this.clickHandler(i)}>
                            Delete
                          </button>
                          <button onClick={(e) => this.editHandler(i)}>
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table> */}
          </div>
        </div>

        <FormComponent
          form={[
            { label: "First Name", type: "text" },
            { label: "First Name", type: "text" },
            { label: "First Name", type: "text" },
            { label: "First Name", type: "radio" },
          ]}
        />

        <FormComponent
          form={[
            { label: "First Name", type: "text" },
            { label: "First Name", type: "text" },
            { label: "First Name", type: "text" },
            { label: "First Name", type: "radio" },
          ]}
        />
      </div>
    );
  }
}

export default CreditForm;
