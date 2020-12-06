import React from "react";

const ListComponent = ({ list, deleteHandler, editHandler }) => {
  return (
    <>
      <table border="1" className="table">
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
                    <button onClick={(e) => deleteHandler(i)}>Delete</button>
                    <button onClick={(e) => editHandler(i)}>Edit</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default ListComponent;
