import React from "react";
import { cars } from "../utils/data";
import Item from "./item";
import Form from "./form";

class List extends React.Component {
  state = { showForm: false, cars: cars, selectedCarList:[] };

  handleDelete = () => { };

  handleAdd = () => {
    this.setState({ showForm: true });
  };
  gotoList = () => {
    this.setState({ showForm: false });
  };

  addCarToList = (input) => {
    let nItem = this.state.cars.filter(
      (car) => car.name === input.selectedCar
    );
    debugger
    let nCart = this.state.selectedCarList.concat({
     // id: this.state.selectedCarList[this.state.selectedCarList.length - 1].id + 1,
      name: nItem[0].name,
      mileage:nItem[0].mileage,
      price:nItem[0].price,
      image:nItem[0].image,
      locations:nItem[0].locations,
     // quantity: input.quantity,
    });
    this.setState({
      selectedCarList: nCart,
    });
    this.gotoList();
    console.log(this.state.selectedCarList);
  };

  render() {
    if (this.state.showForm === false) {
      return (
        <div>
          <h2>Cars for Sale</h2>
          <button onClick={this.handleAdd}>Add A Car!</button>
          {/* {cars.map((car) => console.log(car))} */}
          {/* {cars.map((item)=>(<Item item={item}/>))} */}
          {this.state.selectedCarList.map((car) => (
            <table>
            <tr>
              <td>
              <img height="100" src={car.image} /> 
              </td>
              <td>
              {car.name}
              </td>
              <td>
              ${" "}
                  {Math.round(car.price + Number.EPSILON) /
                    100}{" "}
              </td>
              <td>
              {car.locations}
              </td>
            </tr>            
          </table>
          ))}
          <h2>Conditionally Render List of Items or Form to Add Car</h2>
        </div>
      );
    }
    else {
      return (
        <div>
          <h2>Cars for Sale</h2>
          <button onClick={this.gotoList}>Go to List!</button>
          <Form addCarToList={this.addCarToList}/>
        </div>
      )
    }
  }
}

export default List;
