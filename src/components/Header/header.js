import React from "react";

export default function Header(props) {
    return (
        <header>
            <h3 className="title">Click-Game</h3>
            <h3 className="message">{props.message}</h3>
            <h3 className="scoreBoard">Score Board:     Current: {props.currentScore}  High Score: {props.highScore}</h3>
        </header>
    )
}