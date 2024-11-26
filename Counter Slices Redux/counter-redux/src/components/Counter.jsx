import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/slices/CounterSlice'
function Counter() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <>
    <div>Counter</div>
        <button
        onClick={() => dispatch(increment())}
        >Increment
        </button>
        <br />
        <br />
        <div>{count}</div>
        <br />
        <button
        onClick={() => dispatch(decrement())}
        >Decrement 
        </button>
    </>

  )
}

export default Counter