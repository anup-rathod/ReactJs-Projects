import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    myName: "",
    userName: "",
    password: "",
  })

    //using [ ] is computed value 

  let handleChange = (event) => {                          //    let fieldName = event.targetl.name;                                                             
    setFormData((currData) => {                            //    let newValue = event.target.value;
      return { ...currData, [ event.target.name] : event.target.value }   // we can also write like this   return { ...currData, [fieldName]: newValue }
    })        
  }

  let handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();

    setFormData({
      myName: "",
      userName: "",
      password: "",
    })
  }


  return (                        
    <>
      <form action="">
        <label htmlFor="name">Your Name</label>
        <input type="text" id='name' name='myName' placeholder='Enter here' value={formData.myName} onChange={handleChange} /> <br />

        <label htmlFor="username">User Name</label>
        <input type="text" id='userName' name='userName' placeholder='Enter here' value={formData.userName} onChange={handleChange} /> <br />

        <label htmlFor="password">Password</label>
        <input type="password" id='password' name='password' placeholder='Enter here' value={formData.password} onChange={handleChange} /> <br />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default App
