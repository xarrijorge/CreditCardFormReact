import React, { useState } from 'react'

import Form from './components/form'
import Card from './components/card'

import './styles.css'

export default function App() {
  const [fullName, setFullName] = useState('Monkey D. Luffy')
  const [cardNumber, setCardNumber] = useState('####')
  const [month, setMonth] = useState(4)
  const [year, setYear] = useState(20)

  return (
    <div className="App">
      <Card
        fullName={fullName}
        month={month}
        year={year}
        cardNumber={cardNumber}
      />
      <Form />
    </div>
  )
}
