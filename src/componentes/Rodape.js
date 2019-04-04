import React from 'react'

const Rodape = props => {

    return (

        <footer className='container-fluid text-center'>
            <a href='#myPage' title='To Top'>
                <span className='glyphicon glyphicon-chevron-up'></span>
            </a>
            <p>Curso React 2019 <a href='https://www.w3schools.com' title='Visit w3schools'>www.w3schools.com</a></p>
        </footer>

    )

}

export default Rodape

{/*
  OBS:
  Aqui, por exemplo, criamos um componente STATELESS - NÃO REALIZARÁ TRANSAÇÃO DE DADOS, NÃO RECEBERÁ DADOS. 
  Será apenas para exibir um conteúdo estático 
*/}


