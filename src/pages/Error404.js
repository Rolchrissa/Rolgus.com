
import React, { Component } from 'react'
import '../components/Calculadora.css'
import './error404.css'
import Button from '../components/Boton'
import { Redirect } from 'react-router-dom';


export class erro404 extends Component {
    state = {
        redireccion : false
    }
    changeRedirection = () => {
        setTimeout(() => {

            this.setState({
                redireccion: !this.state.redireccion
            })
        },150)
    }
    render() {
        document.title = "404 | Rolgus";

        return (
            <div id="calculadora" className="calc__404">
                <h2 id="error404">404</h2>
                <p>Page not found</p>
                <div><Button name="Home" click={this.changeRedirection.bind(this)}/></div>
                {this.state.redireccion && <Redirect to="/"/>}
            </div>
        )
    }
}

export default erro404
