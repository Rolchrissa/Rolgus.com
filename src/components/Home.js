import React from 'react'
import { Link } from 'react-router-dom';
import './Calculadora.css'
import Button from './Boton'
import './Home.css'

class Home extends React.Component {
    render() {
        return (
            <div id="calculadora" className="home__home">
                <h2 id="home__home">Rolgus Tool-Box</h2>
                    <div onClick={this.onClick} className="boton__home">
                <Link to="/Portales">
                        <Button name="Enlazar Portales" />
                </Link>
                    </div>
                    <div onClick={this.onClick} className="boton__home">
                <Link to="/RestBlocks">
                        <Button name="Distancias" />
                </Link>
                    </div>
                    <div onClick={this.onClick} className="boton__home">
                <Link to="/Circulos">
                        <Button name="Circulos(en desarrollo)" />
                </Link>
                    </div>
            </div>
        )
    }
}


export default Home;
