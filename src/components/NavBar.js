import React from 'react'
import './NavBar.css'
import rolgusIcon from '../images/icon.png'


class NavBar extends React.Component {

    click = () => {
        
        this.props.setMenu(!this.props.menuState)
            
    }
    render() {
        return (
            <div id="navbar">
                <img src={rolgusIcon} alt="Rolgus Minecraft Skin Face "/>
                <h1>Rolgus</h1>
                <i className='bx bx-menu' onClick={this.click}></i>
                
            </div>
        )
    }
}


export default NavBar;