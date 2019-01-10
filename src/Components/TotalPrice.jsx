import React from 'react'


const TotalPrice = (props) => {
  
const { totalQuantity, totalPrice } = props.totals

  return (

    
    <div className="container">
      <div className="list-group-item">
      <div className="row">
          <div className="col-md-8">Total</div>
          <div className="col-md-2">${totalPrice}</div>
          <div className="col-md-2">{totalQuantity}</div>
        </div>
      </div>
    </div>
  )
}

export default TotalPrice