import React from "react";
import { useState } from 'react';  
import { supabase } from '../client';

const CaC = () => {
    const [crewmate, setCrewmate] = useState({name: "Rando", colour: "red", speed: 0});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCrewmate( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createCrewmate = async (event) => {
        event.preventDefault();
        await supabase
        .from('Crewmates')
        .insert({name: crewmate.name, colour: crewmate.colour, speed: crewmate.speed})
        .select();
        console.log(crewmate)
        window.location = "/CaC";
    }

    return (
        <div>
            <img src="https://www.pngall.com/wp-content/uploads/15/Among-Us-Character-PNG-Cutout.png" alt="" width={300} height={350}/>
            <form onSubmit={createCrewmate}>
                <div className="inputs">
                    <div className="inputBoxes">
                        <label>Name: </label>
                        <input type="text" name="name" placeholder="Stages of War" onChange={handleChange} />
                    </div>
                    <div className="inputBoxes">
                        <label>Colour: </label>
                        <select name="colour" onChange={handleChange}>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="pink">Pink</option>
                            <option value="orange">Orange</option>
                            <option value="yellow">Yellow</option>
                            <option value="black">Black</option>
                            <option value="white">White</option>
                            <option value="purple">Purple</option>
                            <option value="brown">Brown</option>
                        </select>
                    </div>
                    <div className="inputBoxes">
                        <label>Speed: </label>
                        <input type="number" name="speed" placeholder="1.00" onChange={handleChange} />
                    </div>
                </div>
                <button type="submit" >Create Crewmate</button>
            </form>
        </div>
    )

};

export default CaC;