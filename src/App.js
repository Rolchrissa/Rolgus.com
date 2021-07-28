import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.js';
import './App.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portales from './components/Portales';
import Circulos from './components/Circulos';
import RestBlocks from './components/RestBlocks.js';
// import Calculadora from './components/Calculadora'

class App extends React.Component {





    render() {
        return (
            <div id="app">
                <NavBar/>
                
                <Router>
                    <Route exact path="/" render={() => {
                        return (<Home />);
                        }}/>
                    <Route path="/Portales" render={() => {
                        return (<Portales/>)
                    }} />
                    <Route path="/RestBlocks" render={() => {
                        return (<RestBlocks/>)
                    }} />
                    <Route path="/Circulos" render={() => {
                        return (<Circulos/>)
                    }} />
                </Router>

            </div>
        );
    }

}



export default App;


