import React from 'react'

const Form = () => (
  <form className="formBox">
    <input type="text" className="cardHolderName" />
    <div className="dateBox">
      <p>
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          className="cardNumber"
          placeholder="#### #### #### ####"
        />
      </p>
      <input type="text" className="month" />
      <input type="text" className="year" />
      <input type="text" className="cvv" />
    </div>
  </form>
)

export default Form
