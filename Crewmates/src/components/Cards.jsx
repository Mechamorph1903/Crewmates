import React from "react";
import { Link } from 'react-router-dom'
import more from './more.png'

const Cards = (props) => {
    const textColor = props.colour === 'white' || props.colour === 'yellow' ? 'black' : 'white';
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

    return(
    <div className="Card" style={{backgroundColor: props.colour, color: textColor}}>
        <Link to={`/edit/${props.id}`}><img className="moreButton" alt="edit button" src={more} /></Link>
        <img src={colorToImageMap[props.colour]} alt="image of Crewmate" className="crewmateImg"/>
        <h2 className="name">{props.name}</h2>
        <h3 className="colour">{"Colour: " + props.colour}</h3>
        <p className="speed">{"Speed: " + props.speed}</p>
        <Link to={'/crewmate/'+ props.id}><button className="detailButton">Details</button></Link>
    </div>
    )
};

export default Cards;