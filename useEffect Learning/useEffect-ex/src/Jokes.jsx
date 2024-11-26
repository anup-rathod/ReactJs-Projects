import React, { useEffect, useState } from 'react'

function Jokes() {
    const [jokes, setJokes] = useState({})
    
    let addNewJokes = async() => {
        const Url = "https://official-joke-api.appspot.com/random_joke"
        const res = await fetch(Url)
        const data = await res.json()

        setJokes(data)
    }

    useEffect( 
        () => {
            let getFirstJoke = async() => {
                const Url = "https://official-joke-api.appspot.com/random_joke"
                const res = await fetch(Url)
                const data = await res.json()
           
                setJokes({setup : data.setup, punchline : data.punchline} )
            }
            getFirstJoke()
    },[])

  return (
    <>
        <div>Jokes !</div>
        <h3>{jokes.setup}</h3>
        <h3>{jokes.punchline}</h3>
        <button onClick={addNewJokes}>New Jokes</button>
    </>
  )
}

export default Jokes