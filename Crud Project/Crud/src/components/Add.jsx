import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Employee from '../Employee'
import {v4 as uuid} from 'uuid'
import { useNavigate } from 'react-router-dom'

function Add() {

    let history = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        age: "",
    })

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : [e.target.value]
        })
            console.log(formData)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const ids = uuid();
        let uniqueId = ids.slice(0,8);
        console.log(formData)
        let userName = formData.name;
        let userAge = formData.age;
        console.log(userName)

        Employee.push({ id: uniqueId, name: userName, age: userAge})
        
        history("/")
    }

 

  return (
    <div>
        <h2>Create </h2>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="name" id="" placeholder='Enter your name' value={formData.name} onChange={changeHandler}/> <br /> <br />
            <input type="text " name='age' placeholder='Enter your age' value={formData.age} onChange={changeHandler}/> <br /> <br />

            <Button type="submit"> Submit</Button>
        </form>
    </div>
  )
}

export default Add