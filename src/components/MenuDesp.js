import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './MenuDesp.css'
import depflags from '../flags.json'
export class MenuDesp extends Component {

    onClick = () => {
        setTimeout(() => {

            this.props.setMenu(false)
        }, 100)

    }

    render() {
        return (
            <div id="menu__responsive-des" style={this.props.styles}>
                <Link to="/"><div className="menu__res-li" onClick={this.onClick}>Home</div></Link>
                <Link to="/Portales"><div onClick = {this.onClick}className="menu__res-li">Portales</div></Link>
                <Link to="/RestBlocks"><div onClick = {this.onClick}className="menu__res-li">Distancia</div></Link>
                {depflags.Circulos && <Link to="/Circulos"><div onClick={this.onClick} className="menu__res-li">Circulos</div></Link>}
                <div className="menu__res-li-cuenta">
                    {/* <Link to="/RestBlocks" ><div onClick={this.onClick} className="menu__res-li ">Cuenta</div></Link> */}
                </div>

            </div>
        )
    }
}

export default MenuDesp
