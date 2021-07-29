import React from 'react'
import { Link } from 'react-router-dom';
import './Calculadora.css'
import Button from './Boton'
import './Home.css'
import depflags from '../flags.json'

class Home extends React.Component {
    render() {
        document.title = "Rolgus | Minecraft";

        return (
            <div id="calculadora">
                <h2 id="home__h2">Rolgus Tool-Box</h2>
                    <div  className="boton__home">
                        <Link to="/Portales" onClick={this.onClick}>
                            <Button name="Enlazar Portales" />
                        </Link>
                    </div>
                    <div  className="boton__home">
                        <Link to="/RestBlocks" onClick={this.onClick}>
                            <Button name="Distancias" />
                        </Link>
                    </div>
                    {depflags.Circulos && <div  className="boton__home">
                        <Link to="/Circulos" onClick={this.onClick}>
                            <Button name="Circulos(en desarrollo)" />
                         </Link>
                    </div>}
            </div>
        )
    }
}


export default Home;
