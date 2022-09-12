const DisplayBox = (props) => {
    return (
        <div className='container'>
            {props.colorList.map((item, i) => <div key={i} style={{backgroundColor: item, margin: "10px", width: "200px", height:"200px" }}>
            </div>)}
        </div>
    )
}

export default DisplayBox;