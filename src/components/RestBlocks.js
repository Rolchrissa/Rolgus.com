import React, { Component } from 'react'
import './Calculadora.css'
import './RestBlocks.css'
import Button from './Boton'

const errorNumber = {
    borderBottom: "2px solid rgb(177, 0, 0)",
    background: "rgba(177, 146, 146,100)"
}
const validNumber = {
    borderBottom: ("2px solid rgb(0, 92, 69)"),
    background: "transparent"
}

export class RestBlocks extends Component {

    state = {
        posX: '',
        posY: '',
        posZ: '',
        pos2X: '',
        pos2Y: '',
        pos2Z: '',
        posDestX: '',
        posDestY: '',
        posDestZ: '',
        style: validNumber
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

    limpiar = () => {
        this.setState({
            posX: '',
            posY: '',
            posZ: '',
            pos2X: '',
            pos2Y: '',
            pos2Z: '',
            posDestX: '',
            posDestY: '',
            posDestZ: ''
        });
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
    saveState = () => {
        alert('En desarrollo');
    }

    restCoods = () => {
        if (this.validate([this.state.posX, this.state.posY])) {
            this.setState({
                posDestX: Math.abs(parseInt(this.state.posX - this.state.pos2X)),
                posDestY: Math.abs(parseInt(this.state.posY - this.state.pos2Y)),
                posDestZ: Math.abs(parseInt(this.state.posZ - this.state.pos2Z)),
                
            })
        }
    }


    render() {
        return (
            <div id="calculadora">
                <h2 id="calculadora__title">Diferencias</h2>

                <div id="calculadora__form">
                        <div id="calculadora__coors-1" className="calculadora__coords-container">
                            <input type="number"
                                style={this.state.style}
                                name="posX"
                                onChange={this.onChange}
                                value={this.state.posX}
                                id="pos-x"
                                placeholder="1º Coordenada X" />

                            <input type="number"
                                style={this.state.style}
                                name="posY"
                                onChange={this.onChange}
                                value={this.state.posY}
                                id="pos-z"
                                placeholder="1º Coordenada Y" />

                            <input type="number"
                                style={this.state.style}
                                name="posZ"
                                onChange={this.onChange}
                                value={this.state.posZ}
                                id="pos-z"
                                placeholder="1º Coordenada Z" />


                        </div>
                        <div id="calculadora__coors-2" className="calculadora__coords-container">
                            <input type="number"
                                style={this.state.style}
                                name="pos2X"
                                onChange={this.onChange}
                                value={this.state.pos2X}
                                id="pos-x"
                                placeholder="2º Coordenada X" />

                            <input type="number"
                                style={this.state.style}
                                name="pos2Y"
                                onChange={this.onChange}
                                value={this.state.pos2Y}
                                id="pos-z"
                                placeholder="2º Coordenada Y" />

                            <input type="number"
                                style={this.state.style}
                                name="pos2Z"
                                onChange={this.onChange}
                                value={this.state.pos2Z}
                                id="pos-z"
                                placeholder="2º Coordenada Z" />


                        </div>
                </div>
                <div id="calculadora__btn">
                    <Button className="btn-calc"
                        click={this.limpiar}
                        name="Limpiar"
                        styles={{ flexBasis: "25%" }}></Button>
                    
                    <Button click={this.restCoods}
                        name="Restar"
                        styles={{ flexBasis: "50%" }}></Button>
                    
                </div>
                <div id="calculadora__res">
                    <div className="posRes">
                    X: {Math.abs(parseInt(this.state.posX - this.state.pos2X))}</div>
                    <div className="posRes">
                    Z: {Math.abs(parseInt(this.state.posY - this.state.pos2Y))}</div>
                    <div className="posRes">
                    Y: {Math.abs(parseInt(this.state.posZ - this.state.pos2Z))}</div>
                    
                </div>
            </div>
        )
    }
}

export default RestBlocks
