import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const Details = () => {
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState(null);

    useEffect(() => {
        // Fetch the crewmate data from Supabase when the component mounts
        const fetchCrewmate = async () => {
            const { data, error } = await supabase
                .from('Crewmates')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching crewmate:', error);
            } else {
                setCrewmate(data);
            }
        };

        fetchCrewmate();
    }, [id]);

    if (!crewmate) {
        return <div>Loading...</div>;
    }

    // Determine speed status
    const speedStatus = crewmate.speed < 15 ? 'slow' : 'fast';

    // Character details based on color
    const colorDetails = {
        red: 'You have a fiery spirit.',
        blue: 'You are calm and collected.',
        green: 'You are full of life and energy.',
        pink: 'You are sweet and caring.',
        orange: 'You are enthusiastic and creative.',
        yellow: 'You are cheerful and optimistic.',
        black: 'You are mysterious and strong.',
        white: 'You are pure and wise.',
        purple: 'You are regal and ambitious.',
        brown: 'You are grounded and reliable.'
    };

    const textColor = crewmate.colour === 'white' || crewmate.colour === 'yellow' ? 'black' : 'white';
    const colorToImageMap = {
        red: "https://preview.redd.it/an871k4o1sn51.png?width=440&format=png&auto=webp&s=85dcd6cb73b8760802e254ee14dfa3c7ab444591",
        blue: "https://preview.redd.it/ph2jho4o1sn51.png?width=440&format=png&auto=webp&s=7e080e5447d69d1425a8b8a20f1115de18aa69fd",
        green: "https://preview.redd.it/vf3ojm4o1sn51.png?width=440&format=png&auto=webp&s=7cfa65a910d76e324fcc4c23468a9b801c3b74d5",
        pink: "https://preview.redd.it/ppawzo4o1sn51.png?width=440&format=png&auto=webp&s=d09c261013546996e8325d507ff230a7e9513793",
        orange: "https://preview.redd.it/iio3xm4o1sn51.png?width=440&format=png&auto=webp&s=2b9fb1b29396502998feda5c6ed2ed75919c6ad8",
        yellow: "https://preview.redd.it/xprpkp063sn51.png?width=440&format=png&auto=webp&s=5d51eb262af4a50e8f935218feb52682540aa525",
        black: "https://preview.redd.it/4eof2l4o1sn51.png?width=440&format=png&auto=webp&s=02f3a9c7fdb96a50204c5dc272a7e72dfff7cbac",
        white: "https://preview.redd.it/xyqo6hx42sn51.png?width=440&format=png&auto=webp&s=3bf357e64a68883aee1618a1abdadc16d9ceee73",
        purple: "https://preview.redd.it/9kvk25sh2sn51.png?width=440&format=png&auto=webp&s=c469d1dc3fda76a0d2271cecb8d422f1aff925ab",
        brown: "https://preview.redd.it/f7f4fmpi2sn51.png?width=440&format=png&auto=webp&s=79d8eaf10daa28753816cfc8ec5cd26cfa517d29"
    };

    return (
       <div className='detail'>
         <div className="Card" style={{backgroundColor: crewmate.colour, color: textColor, width: "700px", height: "80vh", marginLeft: "80px"}}>
            <img src={colorToImageMap[crewmate.colour]} alt="" width={300} height={300}/>
            <h1>{crewmate.name}</h1>
            <p>Colour: {crewmate.colour}</p>
            <p>Speed: {crewmate.speed} ({speedStatus})</p>
            <p>{colorDetails[crewmate.colour]}</p>
        </div>
       </div>
    );
};

export default Details;