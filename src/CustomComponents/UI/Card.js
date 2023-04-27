import './Card.css';
import React from 'react';
//making a wrapper for the items
function Card(props) {
    const  classes = "Card container " + props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}
export default Card;