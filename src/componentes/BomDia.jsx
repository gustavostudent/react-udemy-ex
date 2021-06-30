import React from "react";

let buenos = (props) => <h1>Bom dia {props.nome} ! </h1>

/*
    - Uma das formas de se importar mais de um html de uma vez. Elas tem que estar envolvidas por algo
    - Cria a div dentro do HTML da página 
*/

buenos = (props) => <div>
    <h1>Bom dia {props.nome}</h1>
    <h3>Até Breve, menó</h3>
</div>

/*
    - Uma das formas de se importar mais de um html de uma vez. Elas tem que estar envolvidas por algo
    - O <React.Fragment></React.fragment> é ignorado cria-se apenas as tags que estão dentro. 
*/

buenos = props => 
    <React.Fragment>
        <h1>Bom dia {props.nome}</h1>
        <h3>Até Breve, menó</h3>
    </React.Fragment>


export default buenos;