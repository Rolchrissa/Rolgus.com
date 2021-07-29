import React, { Component } from 'react';
import './Calculadora.css';
import './Portales.css'
import Boton from './Boton'
import depflags from '../flags.json'

const errorNumber = {
    borderBottom: "2px solid rgb(177, 0, 0)",
    background: "rgba(177, 146, 146,100)"
}
const validNumber = {
    borderBottom: ("2px solid rgb(0, 92, 69)"),
    background: "transparent"
}

class Portales extends Component {
    state = {
        posX: '',
        posY: '',
        posDestX: '',
        posDestY: '',
        style: validNumber,
        dest: ''
    }
    errorValues = () => {
        this.setState({
            style: errorNumber
        });
        setTimeout(() => {
            this.setState({
                style: validNumber
            });
        }, 500)
    }
    validate = (coord) => {
        for (let element of coord) {
            if (isNaN(element)) {
                alert("Ingresa SOLO numeros\n y no modifiques mi html, Gracias\n atte: Rolgus.")
                return false;
            }
            if (element === "") {
                this.errorValues();
                return false;
            }
        }
        return true;
    }
    overToNeth = () => {
        if (this.validate([this.state.posX, this.state.posY])) {
            this.setState({
                posDestX: Math.trunc(parseInt(this.state.posX / 8)) ,
                posDestY: Math.trunc(parseInt(this.state.posY / 8)) ,
            })
        }
    }
    nethToOver = () => {
        if (this.validate([this.state.posX, this.state.posY])) {
            this.setState({
                posDestX: Math.trunc(parseInt(this.state.posX * 8)),
                posDestY: Math.trunc(parseInt(this.state.posY * 8)),
            })
        }            
    }
    limpiar = () => {
        this.setState({
            posX: '',
            posY: ''
        });
    }
    saveState = () => {
        alert('En desarrollo');
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        document.title = "Portales | Rolgus";

        return (
            <div id="calculadora">
                <h2 id="calculadora__title">Enlazar Portales</h2>
                <div id="calculadora__form">
                    <div id="form__inputs">
                        <input type="number"
                            style={this.state.style}
                            name="posX"
                            onChange={this.onChange}
                            value={this.state.posX}
                            id="pos-x"
                            placeholder="Coordenada X" />
                        <input type="number" id="pos-y"
                            style={this.state.style}
                            name="posY"
                            onChange={this.onChange}
                            value={this.state.posY}
                            placeholder="Coordenada Z" />
                    </div>
                    <div id="btn-limpiar">
                        <Boton className="btn-calc" click={this.limpiar} name="Limpiar"></Boton>
                    </div>
                </div>
                <div id="calculadora__btn">
                    <Boton click={this.overToNeth}
                        name="OverWorld  ->  Nether"                        
                    ></Boton>
                    <Boton click={this.nethToOver}
                        name="Nether  ->  OverWorld"></Boton>
                    {depflags.save && <Boton click={this.saveState}
                        name="Guardar"
                        id="save"
                        styles={{flexBasis: "50%"}}></Boton>}
                </div>
                <div id="calculadora__res">
                    <div className="posRes"> X: {this.state.posDestX}</div>
                    <div className="posRes"> Z: {this.state.posDestY}</div>
                    
                </div>
            </div>
        )
    }
}
export default Portales;
