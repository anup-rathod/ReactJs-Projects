import React, { useState } from 'react'
import { genTicket, sum } from './genTicket'

function Lottery() {
    let [ticket, setTicket] = useState(genTicket(3))
    let isWinning = sum(ticket) === 15
    
    let generateLottery = () => {
        setTicket(genTicket(3))
    }

  return (
    <>
    <h1>Lottery Ticket</h1>
      <span>{ticket[0]}</span>
      <span>{ticket[1]}</span>
      <span>{ticket[2]}</span>
      <br />
      <button onClick={generateLottery}>Generate Lottery</button>
      <br />
      <h3>{isWinning && "Congratulation you won"}</h3>
    </>
  )
}

export default Lottery