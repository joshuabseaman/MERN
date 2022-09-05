import React from "react";
import classes from './PersonCard.module.css'

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    render() {
        const {firstName, lastName, hairColor} = this.props;
        return(
            <div className={classes.card}>
                <div className={classes.content}>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={()=> {this.setState({age: this.state.age+=1})}}>Birthday button for {firstName} {lastName}</button>
                </div>
            </div>
        );
    }
}

export default PersonCard;