import React, { Component } from "react"
import Container from "./Container"
import Table from "./Table"
import Column from "./Column"
import Row from "./Row"
import EmployeeDetail from "./EmployeeDetail"
import EmployeeSearch from "./EmployeeSearch"
import API from "../utils/API"

class Employee extends Component {
  state = {
    employees: [],
    results: [],
    search: "",
    sorted: false
  };

  componentDidMount() {
    this.displayAll();
  }

  displayAll = () => {
    API.search()
      .then((res) =>
        this.setState({ employees: res.data.results, results: res.data.results })
      )
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    event.preventDefault()
    this.searchEmployee(event.target.value)
  };

  searchEmployee = (name) => {
    const FilterEmployee = this.state.employees.filter((person) => {
      const test = `${person.name.first} ${person.name.last}`
        .toLocaleLowerCase()
        .includes(name.toLocaleLowerCase());
      console.log(test);
      return test;
    });
    this.setState({ results: FilterEmployee });
  };

  sort = () => {
    if (!this.state.sorted) {
      this.setState({
        sorted: true,
        results: this.state.results.sort(function (a, b) {
          if (a.name.first < b.name.first) {
            return -1;
          }
          if (a.name.first > b.name.first) {
            return 1;
          }
          return 0;
        }),
      });
    } else {
      this.setState({ results: this.state.results.reverse() });
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Column size="md-8">
          <EmployeeSearch
            employees={this.state.results}
            handleInputChange={this.handleInputChange}
          />
            <Table sort={this.sort}>
              {this.state.results.map((employee, key) => (
                <EmployeeDetail
                  firstName={employee.name.first}
                  lastName={employee.name.last}
                  email={employee.email}
                  phone={employee.phone}
                  src={employee.picture.thumbnail}
                  key={key}
                />
              ))}
            </Table>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default Employee;