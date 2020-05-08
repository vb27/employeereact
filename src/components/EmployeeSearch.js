import React from "react";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Search Employee Name:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search for Employee"
          id="search"
        />
        <datalist id="employees">
          {props.employees.map((employee, key) => (
            <option
              value={`${employee.name.first} ${employee.name.last}`}
              key={key}
            />
          ))}
        </datalist>
      </div>
    </form>
  );
}

export default SearchForm;