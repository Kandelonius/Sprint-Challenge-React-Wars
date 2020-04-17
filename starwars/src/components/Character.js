// Write your Character component here
import React, { useState, useEffect  } from "react";


const Character = (props) => {
    const [name, setName] = useState('')
    const [birthYear, setBirthYear] = useState(null)
    useEffect(() => {
        setName(props.character.name)
        setBirthYear(props.character.birth_year)
        },
      []);
    return (
        <div className = "character">
            <h1 className = "character-title">{name}</h1>
            <h4>Born: {birthYear}</h4>
        </div>
    )
}

export default Character;