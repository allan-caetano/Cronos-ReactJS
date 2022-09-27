import React from "react";
import './style.scss'


interface propsBotao{
    texto: string;
    type?: "button" | "submit";
}

const Botao: React.FC<propsBotao> = ({texto, type } )=>{
    return (
        <button type={type} className="botao">
          {texto}  
        </button>
    )
}


export default Botao