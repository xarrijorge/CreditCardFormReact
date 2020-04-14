import React from 'react'

import Chip from '../images/chip.png'
import Visa from '../images/visa.png'

let bgNum = Math.floor(Math.random() * 6) + 1

const Meta = ({ fullName = 'Full Name', month = 'MM', year = 'YY' }) => (
  <div className="cardMeta">
    <p>
      Card Holder
      <p>{fullName}</p>
    </p>
    <p>
      Expires
      <p>
        {month}/{year}
      </p>
    </p>
  </div>
)

const Card = ({ fullName, month, year, cardNumber }) => (
  <div className={`card bgImage${bgNum}`}>
    <header>
      <img src={Chip} alt="Visa authentic chip" />
      <img src={Visa} alt="Visa logo" />
    </header>
    <div className="cardNumber">
      <span>{cardNumber}</span>
      <span>{cardNumber}</span>
      <span>{cardNumber}</span>
      <span>{cardNumber}</span>
    </div>
    <Meta fullName={fullName} month={month} year={year} />
  </div>
)

export default Card
