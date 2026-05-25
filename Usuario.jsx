import { useState } from 'react'
import Logo1 from './assets/batata.webp'
import './Listagem.css'

export default function Listagem() {


    return(
       <>
       <table border="1">

        <tr>
          <td>Nome</td>
          <td>Email</td>
          <td>Senha</td>
          <td>Confirmar Senha</td> 
        </tr>

        <tr>
            <td>João</td>
            <td>joao@gmail.com</td>
            <td>Joao29</td>
            <td>Joao29</td>
        </tr>

       </table>
       </>
    )
}