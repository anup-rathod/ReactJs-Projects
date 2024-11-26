import React from 'react'
import TicketNum from './TicketNum'

function Ticket({ ticket }) {
  return (
    <>
        {
            ticket.map( ( num, idx) => {
                <TicketNum num={num} key={idx}/>
            })
        }
    </>
  )
}

export default Ticket