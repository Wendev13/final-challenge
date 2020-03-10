import React, { Component } from 'react'

export default class CustomizeImage extends Component {
    state = {
        size: 0,
        url: ""
    }

    handleState = e => {
        this.setState({ [e.target.name]: e.target.value });
    };


    render() {
        return (
            <div>

                <form className="image-form" onChange={this.handleState}>

                    <h3>Customize Image</h3>
                    <div className="inside-form">
                        <input className="input-image" type="text" name="url" placeholder="Url of your image">{this.state.url}</input>
                        <input className="input-size" type="number" min="0" max="200" name="size"></input>
                        <p className="pixel-range">{this.state.size.min} x {this.state.size.max} px</p>
                        <div className="image-result"></div>
                    </div>

                </form>

            </div>
        )
    }
}
