import React from "react";

export default function Board(props) {
    return <div id="board">
        {props.images.map(image => (
            // <div style={{ backgroundColor: image.color }} className="image" id={image.name} key={image.index} onClick={() => { props.clickHandler(image.index) }} ></div>
            <img id={image.name} className="image" src={image.pic} alt={image.name} onClick={() => { props.clickHandler(image.index) }} />
        ))}
    </div>

}