import React from "react";
import '../styles/BotonClear.css'

export default function BotonClear(props) {
    return (
        <div className="boton-clear" onClick={props.clic}>
            {props.children}
        </div>
    );
}