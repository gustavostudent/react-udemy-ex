import React from "react";

const bomDia = props => <h1>Bom dia {props.nome}</h1>
const boaTarde = props => <h1>Boa tarde {props.nome}</h1>

const obj = {
    bomDia,
    boaTarde
}

export default obj