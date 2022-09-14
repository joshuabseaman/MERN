import React from "react";
import { useParams } from "react-router-dom";

const Multiple = (props) => {
    const {word} = useParams();
    const {textColor} = useParams();
    const {backgroundColor} = useParams();

    return (
        <h1 style={{backgroundColor: backgroundColor, color: textColor, padding: "2rem"}}>The word is: {word}</h1>
    )
}

export default Multiple;