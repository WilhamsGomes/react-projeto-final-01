import React from "react";
import "./Banner.css";
import img from "./makeup_artist_rxn8.svg";

export default function Banner(){

    return(
        <div>
             <img src={img} alt="imagem-login" className="imagem"/>
             <h3>A melhor maquiagem de Pernambuco</h3>
        </div>
    );

}