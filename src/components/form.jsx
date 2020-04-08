import React from 'react'

const Form = () => (
  <div className="formBox">
    <form>
      <div>
        <p>Card Number</p>
        <input type="text" className="cardNumber" />
      </div>
      <div>
        <p>Card Number</p>
        <input type="text" className="cardNumber" />
      </div>
      <div className="metaBox">
        <div className="dateBox">
          <p>Expiration Date</p>
          <input type="text" className="month" placeholder="Month" />
          <input type="text" className="year" placeholder="Year" />
        </div>
        <div>
          <p>CVV</p>
          <input type="text" className="cvv" />
        </div>
      </div>
      <button>Submit</button>
    </form>
  </div>
)

export default Form
