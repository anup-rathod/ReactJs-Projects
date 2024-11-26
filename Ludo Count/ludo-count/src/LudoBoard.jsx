import React from 'react'
import { useState } from 'react';

function LudoBoard() {
    const [ moves , setMoves] = useState({blue : 0, red : 0, yellow : 0, green : 0})  //For Object
    const [arr, setArr] = useState(["no moves"]) //For Array
  
  function updateBlue(){
      setMoves({...moves, blue: moves.blue + 1})
      setArr([...arr,  "blue  move"]) //Directly Passes the value to setArr to update array uses SPREAD operator
  }
  function updateRed() {
      setMoves({...moves, red: moves.red + 1})
      setArr((prevArr) => {
        return [...prevArr, "red move"] // can also use callback 
      }) 
  }
  let updateYellow = () => {
      setMoves((prevMoves) => {
          return { ...prevMoves, yellow: moves.yellow + 1}
        })
        setArr([...arr,  "yellow  move"])
  }
  function updateGreen() {
    setMoves((prevMoves) => {
        return { ...prevMoves, green: moves.green + 1}
    })
    setArr([...arr,  "green  move"])
  }

  return (
    <>
      {arr} 
      Value of Blue is {moves.blue} &nbsp; <br />
      <button onClick={updateBlue}>+1</button> <br /> <br />

      Value of Red is {moves.red} <br />
      <button onClick={updateRed}>+1</button> <br /> <br />

      Value of Yellow is {moves.yellow} <br />
      <button onClick={updateYellow}>+1</button> <br /> <br />

      Value of Green is {moves.green} <br />
      <button onClick={updateGreen}>+1</button>

    </>
  )
}
export default LudoBoard
