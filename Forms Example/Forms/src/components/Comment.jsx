import React, { useState } from 'react'

function Comment() {
    const [formData, setFormData] = useState({
        name: "",
        comment: "",
        rating: 5,
    })

    let handleChange = (event) => {

        console.log(formData);
        setFormData(( currData ) => {
            return {...currData, [ event.target.name ] : event.target.value }
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        setFormData({
            name: "",
            comment: "",
            rating: 5,
        })
    }

  return (
    <>
        <div>Comment</div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input type="text" name='name' id='name' placeholder='Enter your Name' value={formData.name} onChange={handleChange} /> <br />
            <textarea name="comment"  cols="30" rows="10" value={formData.comment} onChange={handleChange}>Enter Your Comment here</textarea> <br />
            <label htmlFor="rating">Rating</label>
            <input type="number" name='rating' value={formData.rating} onChange={handleChange} /> <br />
            <button>Submit</button>
        </form>
    </>
  )
}

export default Comment