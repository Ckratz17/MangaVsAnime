import React from "react";
import animeBg from '../assets/images/animeBG.png'

function Header() {
    return (
        <div>
            <img  className="jumbotron" src={animeBg} alt="header"></img>
        </div>
    )
}

export default Header