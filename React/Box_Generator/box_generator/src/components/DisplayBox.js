const DisplayBox = (props) => {
    return (
        <div className='container'>
            {props.colorList.map((item, i) => <div key={i} style={{backgroundColor: item, margin: "1.5rem", width: "12rem", height:"12rem" }}>
            </div>)}
        </div>
    )
}

export default DisplayBox;