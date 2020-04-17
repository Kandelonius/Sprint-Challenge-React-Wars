// Write your Character component here
import React, { useState, useEffect  } from "react";


const Character = (props) => {
    const [films, setFilms] = useState('')//map
    const [name, setName] = useState('')
    const [birthYear, setBirthYear] = useState(null)
    {console.log("props in character",props)}
    useEffect(() => {
        setName(props.character.name)
        setBirthYear(props.character.birth_year)
        setBirthYear(props.character.name)
        },
      []);
    return (
        <div className = "character">
            <h1 className = "character-title">{name}</h1>
            <h4>{birthYear}</h4>
           
        </div>
    )
}

export default Character;