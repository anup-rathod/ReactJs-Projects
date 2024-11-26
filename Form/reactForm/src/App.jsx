import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", isVisible: true, mode:"" })

  function changeHandler(event){
    const {name, value, checked, type} = event.target
      setFormData(prevFormData => {
        return{
          ...prevFormData, [name]: type === "checkbox" ? checked : value
        }
      })
  }

  function submitHandler(event){
    event.preventDefault()

    console.log("Printing the Entire Form");
    console.log(formData);
  }

  return (
    <>
    <h1>Form</h1>
        <form onSubmit={submitHandler}>
        <input
        type='text'
        placeholder='first name'
        onChange={changeHandler}
        name= "firstName"
        value={formData.value}
        />
      <br /> <br />
      <input
        type='text'
        placeholder='last name'
        onChange={changeHandler}
        name= "lastName"
        value={formData.value}
        />
      <br />
      <br />
      <input
        type='checkbox'
        onChange={changeHandler}
        name= "isVisible"
        checked= {formData.isVisible}
        />
        <label htmlFor='isVisible'>AM I Visible</label>

        <br />
        <br />
      <label htmlFor="mode"><u>Mode</u></label>
      <br />

        <input
        type='radio'
        onChange={changeHandler}
        name= "mode"
        value="Offline-Mode"
        checked= {formData.mode === "Offline-Mode"}
        />
        <label htmlFor="Offline-Mode">Offline-Mode</label>

        <input
        type='radio'
        onChange={changeHandler}
        name= "mode"
        value="Online-Mode"
        checked= {formData.mode === "Online-Mode"}
        />
        <label htmlFor="Online-Mode">Online-Mode</label>

      <br /> <br />

      <label htmlFor="favCar"> Tell me Your Favourite Car</label>

        <select 
        name="favCar" 
        id="favCar"
        value={formData.favCar}
        onChange={changeHandler}
        >
          <option value="scorpio">scorpio</option>
          <option value="fortuner">fortuner</option>
          <option value="Thar">Thar</option>
          <option value="Defender">Defender</option>
        </select>

        <br />
        <br />
      <button>Submit</button>
        
        </form>
    </>
  )
}

export default App
