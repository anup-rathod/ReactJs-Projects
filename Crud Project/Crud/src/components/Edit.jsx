import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Employee from '../Employee'
import { useNavigate } from 'react-router-dom'

function Edit() {
    let history = useNavigate()
    
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        age: "",
    })

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('formData'))
        setFormData(storedData)
    }, [])

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let userId = formData.id;
        let userName = formData.name;
        let userAge = formData.age;

        let updatedData  = ({ id: userId, name: userName, age: userAge})
        localStorage.setItem('formData',JSON.stringify(updatedData ))
        history("/")
    }

    return (
        <div>
            <h2>Edit</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="id" placeholder='Enter your id' value={formData.id} onChange={changeHandler} /> <br /> <br />
                <input type="text" name="name" placeholder='Enter your name' value={formData.name} onChange={changeHandler} /> <br /> <br />
                <input type="text" name='age' placeholder='Enter your age' value={formData.age} onChange={changeHandler} /> <br /> <br />

                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default Edit
