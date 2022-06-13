import React, { useState } from 'react'
import card from './images/card.png'
import visa from './images/visa.png'
import discover from './images/discover.png'
import paypal from './images/paypal.png'

const Card = () => {
  const [values, setValues] = useState({
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
    postalCode: '',
    checkBox: '',
  });

  const handleCardNumberChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      cardNumber: event.target.value,
    }));
  };
  const handleExpirationDateChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      expirationDate: event.target.value,
    }));
  };
  const handleSecurityCodeChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      securityCode: event.target.value,
    }));
  };
  const handlePostalCodeChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      postalCode: event.target.value,
    }));
  };

  const handleCheckBoxChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      checkBox: event.target.value,
    }));
  };


  return (
    <div className='payment-container'>
      <div className="payment-info">
        <h3 className="p-head">Payment Information</h3>
        <p className="p-text">Choose your method of payment</p>
        <div className="card">
          <img src={card} alt="card" />
        </div>
      </div>
      <div className="info">
        <div className="logos">
          <div className="logo">
            <img src={visa} alt="card" />
          </div>
          <div className="logo">
            <img src={discover} alt="card" />
          </div>
          <div className="space"></div>
          <div className="logo-circle"></div>
          <div className="logo">
            <img className="paypal" src={paypal} alt="card" />
          </div>
        </div>
        <form className="form" action="" method="post">
          <div className="form-line">
            <div className="form-group">
              <label htmlFor="number">Credit card number</label>
              <input
                type="text" 
                id="number" 
                value={values.cardNumber} 
                onChange={handleCardNumberChange} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Expiration date</label>
              <input 
                type="text" 
                id="date" 
                value={values.expirationDate} 
                onChange={handleExpirationDateChange} 
              />
            </div>
          </div>
          <div className="form-line">
            <div className="form-group">
              <label htmlFor="security">Security Code</label>
              <input 
                type="text" 
                id="security" 
                value={values.securityCode} 
                onChange={handleSecurityCodeChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="postal">Postal Code</label>
              <input
               type="text" 
               id="postal" 
               onChange={handlePostalCodeChange} 
              />
            </div>
          </div>
          
          <div className="check">
          <label class="container">Use this card for next time purchase
            <input type="checkbox" checked="checked" onChange={handleCheckBoxChange} />
            <span class="checkmark"></span>
          </label>
          </div>

          

          <div >
            <button className="btn">Add card</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Card