import React from "react";
import "./Menu.css"

export default function Menu(){

    return(
        <div>
            <ol className="nav-bar">
                <li>Home</li>
                <li>Produtos</li>
                <li>Quem somos</li>
                <li>Promoções</li>
                <li>Cadastre-se</li>
            </ol>
        </div>
    );
}