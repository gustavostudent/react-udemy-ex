import React, { Component } from "react";

export default class Saudacao extends Component {

    state = {
        tipo: "Bom dia",
        nome: "Robierta"
    }

    setTipo(e){
        this.setState({tipo: e.target.value})
    }
    setNome(e){
        this.setState({nome: e.target.value})
    }

    render() {
        const {tipo, nome} = this.state
        return <div>
                    <h1> {tipo} {nome} !</h1>
                
                    <hr />

                    <input type="text" placeholder="Tipo.." onChange={(e) => this.setTipo(e)} value={tipo} />
                    <input type="text" placeholder="Nome.." onChange = { e => this.setNome(e)} value={nome} />

                </div>
        
    }

}
