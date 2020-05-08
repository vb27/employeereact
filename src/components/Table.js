import React from "react";

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>First <button onClick={props.sort}>Sort</button></th>
          <th>Last</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}

export default Table;