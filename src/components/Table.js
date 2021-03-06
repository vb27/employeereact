import React from "react";

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th><button onClick={props.sort}>Sort</button></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}

export default Table;