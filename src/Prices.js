import React from 'react'

const Prices = () => {
  return (
    <div className="prices">
      <div className="price-group">
        <h3>Subtotal</h3>
        <h3>₦2,497.00</h3>
      </div>
      <div className="price-group">
        <h3>Estimated Tax</h3>
        <h3>₦119.64</h3>
      </div>
      <div className="price-group ">
        <h3>Promotional Code: <span>Z4KXLM9A</span></h3>
        <h3>₦-60.00</h3>
      </div>
    </div>
  )
}

export default Prices