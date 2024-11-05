import React from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { useState, useEffect } from 'react';
import { supabase } from '../client';

const EditCrewMate = () => {

    const {id} = useParams();
    const [crewMate, setCrewmate] = useState({id: null, name: "", colour: "", speed: null});



    useEffect(() => {
        const fetchCrewMate = async () => {
            const { data, error } = await supabase
                .from('Crewmates')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error("Error fetching crewMate:", error);
            } else {
                setCrewmate(data);
            }
        };

        fetchCrewMate();
    }, [id]);


    const handleChange = (event) => {
        const {name, value} = event.target;
        setCrewmate( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updatePost = async (event) => { 
        event.preventDefault();
        await supabase
        .from('Crewmates')
        .update({ name: crewMate.name, colour: crewMate.colour,  speed: crewMate.speed})
        .eq('id', id);

        window.location = "/gallery";
     }

    const deletePost = async (event) => {
        event.preventDefault();
        await supabase
        .from('Crewmates')
        .delete()
        .eq('id', id);

        window.location = "/gallery";
    }

    return (
        <div>
            <form>
            <div className="inputs">
                    <div className="inputBoxes">
                        <label>Name: </label>
                        <input type="text" name="name" value={crewMate.name} onChange={handleChange} />
                    </div>
                    <div className="inputBoxes">
                        <label>Colour: </label>
                        <select name="colour" onChange={handleChange} value={crewMate.colour}>
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
                        <input type="number" name="speed" value={crewMate.speed} onChange={handleChange} />
                    </div>
                </div>
                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditCrewMate;