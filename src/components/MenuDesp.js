import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './MenuDesp.css'
export class MenuDesp extends Component {

    onClick = () => {
        this.props.setMenu(false)

    }

    render() {
        return (
            <div id="menu__responsive-des" >
                <Link to="/"><div className="menu__res-li" onClick={this.onClick}>Home</div></Link>
                <Link to="/Portales"><div onClick = {this.onClick}className="menu__res-li">Portales</div></Link>
                <Link to="/RestBlocks"><div onClick = {this.onClick}className="menu__res-li">Distancia</div></Link>
                <Link to="/Circulos"><div onClick = {this.onClick}className="menu__res-li">Circulos</div></Link>
            </div>
        )
    }
}

export default MenuDesp
