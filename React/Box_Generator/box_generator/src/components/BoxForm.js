import React, { useState } from  'react';

const BoxForm = (props) => {
    const [color, setColor] = useState("");

    const createBox = (e) => {
        e.preventDefault();
        const newBox = {color};
        console.log(newBox);
        props.onNewColor(color);
    }

    return (
        <form onSubmit={createBox}>
            <label>Color</label>
            <input onChange={(e) => setColor(e.target.value)} name="color" type="text" value={color}></input>
            <button>Add</button>
        </form>
    )
}

export default BoxForm;