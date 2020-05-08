import React from "react";

function EmployeeSearch(props) {
  return (
    <tr>
      <td>
        <img
          alt={props.firstName}
          className="img"
          src={props.src}
          style={{ margin: "0 auto" }}
        />
      </td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
    </tr>
  );
}

export default EmployeeSearch;