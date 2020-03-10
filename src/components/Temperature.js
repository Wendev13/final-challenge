import React, { Component } from 'react'

export default class Temperature extends Component {
    state = {
        temperature: 0
    };

    handleState = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
    render() {
        return (
            <div>

                <form className="temp-form" onChange={this.handleState}>

                <h3>Temperature</h3>
                <div className="inside-form">
                    <input className="input" type="number" min="0" max="60" name="temperature" placeholder="Temperature in C">
                    </input>
                    <p className="weather-result"></p>
                </div>
                
                </form>

            </div>
        )
    }
}
