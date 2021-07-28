import React, { Component } from 'react'
import './Boton.css'

export class Boton extends Component {
    render() {
        return (
            <div style={this.props.styles}>
                <button onClick={this.props.click} style={{
                    width: "100%"
                }}>{this.props.name}</button>
            </div>
        )
    }
}

export default Boton
