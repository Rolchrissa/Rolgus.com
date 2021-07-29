import React from 'react'
import { Link } from 'react-router-dom';

import './NavBar.css'
import rolgusIcon from '../images/icon.png'


class NavBar extends React.Component {

    click = () => {
        
        this.props.setMenu(!this.props.menuState)
            
    }
    render() {
        return (
            <div id="navbar">
                <a href="https://discord.gg/NKMzAmT4SD " target="_blank"><img src={rolgusIcon} alt="Rolgus Minecraft Skin Face " /></a>
                <Link to="/">Rolgus</Link>
                <i className='bx bx-menu' onClick={this.click}></i>
                
            </div>
        )
    }
}


export default NavBar;