import React from 'react'
import './NavBar.css'
import rolgusIcon from '../images/icon.png'


class NavBar extends React.Component {
    
    render() {
        return (
            <div id="navbar">
                <img src={rolgusIcon} alt="Rolgus Minecraft Skin Face "/>
                <h1>Rolgus</h1>
                <i className='bx bx-menu'></i>
            </div>
        )
    }
}


export default NavBar;