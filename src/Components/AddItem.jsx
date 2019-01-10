import React, { Component }from "react";
// 1. set state issues
// 2. create a class component?
// 3. object inside dropdown selecter
// 4. what kind of submit handler should I have and where
// 5. when do I want to create a local state or full class component? 

class AddItem extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        id: 0,   
        quantitiy: 0
      }
  }


    onSubmit = (e) => {
      e.preventDefault()
      this.props.addCartItem(this.state)

      
    }
  
  
    render(){

      const itemOptions = this.props.products.map((item, i) => {
      return <option key={i} value={item.id}>{item.name}</option>;
      })

      return (

        <div>
          <div className="container">
            <form onSubmit= { this.onSubmit }>
              {/* submit handler */}
              <label>Quantity</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom05"
                required
                onChange={ (e) => this.setState({quantity: e.target.value})}
              />
              <label>Products</label>
              <select required className="custom-select custom-select-lg mb"
                onChange={ (e) => this.setState({id: e.target.value})}
                >
                <option selected disabled required value=""
                >
                Open this select menu
                </option>
                {itemOptions}
              </select>
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </form>
          </div>
        </div>
      );
    }
}

export default AddItem;
