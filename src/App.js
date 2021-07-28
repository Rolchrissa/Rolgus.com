import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.js';
import './App.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portales from './components/Portales';
import Circulos from './components/Circulos';
import RestBlocks from './components/RestBlocks.js';
import Menu from './components/MenuDesp'
var hola = '';
class App extends React.Component {
    state = {
        menu: false
    }
    setMenu(estado) {
        // let change = {
        //     menu: estado
        // }
        hola = estado;
        console.log((hola));
        console.log((this.state.menu));
        this.setState({
            menu: estado
        })
    }


    render() {
        return (
            <div id="app">
                <Router>
                    <NavBar setMenu={this.setMenu.bind(this)} menuState={this.state.menu}/>
                    {this.state.menu ? <Menu setMenu={this.setMenu.bind(this)}/> : ''}
                    <Route exact path="/" render={() => {
                        document.title = "Rolgus | Minecraft";
                        
                        return (<Home />);
                        }}/>
                    <Route exact path="/Portales" render={() => {
                        document.title = "Portales | Rolgus";

                        return (<Portales/>)
                    }} />
                    <Route exact path="/RestBlocks" render={() => {
                        document.title = "Distancia | Rolgus";
                        return (<RestBlocks/>)
                    }} />
                    <Route exact path="/Circulos" render={() => {
                        document.title = "Circulos | Rolgus";
                        return (<div>
                            <Circulos />
                        </div>)
                    }} />
                </Router>

            </div>
        );
    }

}



export default App;


