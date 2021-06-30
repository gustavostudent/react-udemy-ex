import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


ReactDOM.render(
    <Pai nome="Carlos" sobrenome="Silva">
        <Filho nome="Alberto"></Filho>
        <Filho nome="Alfechado"></Filho>
        <Filho nome="Moana"></Filho>
    </Pai>
    , document.querySelector("#root"))
