import React, { Fragment } from 'react'

import Chip from '../images/chip.png'
import Visa from '../images/visa.png'

import b1 from '../images/visa1.jpg'
import b2 from '../images/visa2.jpg'
import b3 from '../images/visa3.jpg'

let bgNum = Math.floor(Math.random() * 3) + 1

const Meta = ({ fullName = 'Full Name', month = 'MM', year = 'YY' }) => (
  <Fragment>
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
  </Fragment>
)

const Card = ({ fullName, month, year, cardNumber }) => (
  <div className={`card bgImage${bgNum}`}>
    <head>
      <img src={Chip} alt="Visa authentic chip" />
      <img src={Visa} alt="Visa logo" />
    </head>
    <p>{cardNumber}</p>
    <Meta fullName={fullName} month={month} year={year} />
  </div>
)

export default Card
