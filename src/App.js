import React from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import './App.js';
import './App.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portales from './components/Portales';
import Circulos from './components/Circulos';
import RestBlocks from './components/RestBlocks.js';
import Menu from './components/MenuDesp';
import Error404 from './pages/Error404';

const menuSylesOff = {
    top: "-100vh",
}
const menuSylesOn = {
    top: "55px",
}

class App extends React.Component {
    state = {
        menu: false,
        menuState: menuSylesOff
    }
    setMenu(estado) {

        this.setState({
            menu: estado,
            menuState: estado ? menuSylesOn : menuSylesOff
        })
    }


    render() {
        return (
            <div id="app">

                <Router>
                        <NavBar setMenu={this.setMenu.bind(this)} menuState={this.state.menu}/>
                        <Menu setMenu={this.setMenu.bind(this)} styles={this.state.menuState }/>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/Portales" component={Portales } />
                            <Route exact path="/RestBlocks" component={RestBlocks}/>
                            <Route exact path="/Circulos" component={Circulos}/>
                            <Route component={Error404}/>
                    </Switch>
                </Router>


            </div>
        );
    }

}





export default App;


