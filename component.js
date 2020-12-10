import React from 'react';

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAge: this.props.age
        };
    }

    increaseAge = () => {
        this.setState({ currentAge: this.state.currentAge + 1 })
    }

    render() {
        return (
            <div>
                <h1> {this.props.lastName}, {this.props.firstName} </h1>
                <p> Age: {this.state.currentAge} </p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={ this.increaseAge } >Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>

        )
    }
}

export default PersonCard;
