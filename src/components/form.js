import React from "react";
import { cars } from "../utils/data";
import CarList from "./carlist";

class Form extends React.Component {
  state = {
    cars: cars,
    selectedCar:''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCarToList(this.state);
  };
  selectChange = (e) => {
    this.setState({
      selectedCar: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <input />
        <input />
        <input />
        <input />  */}
        <label>
            Car:
            <div className="input-group mb-3">
              <select
                className="custom-select"
                id="inputGroupSelect01"
                value={this.state.name}
                onChange={this.selectChange}
              >
                <option>Select an option...</option>
                {this.state.cars.map((product, i) => (
                  <CarList key={i} car={product} />
                ))}
              </select>
            </div>
          </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
