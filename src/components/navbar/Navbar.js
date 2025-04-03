import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Logo from "../../images/logotipo.svg"

function NavbarSection (){

    const [BurguerMenu, setBurguerMenu] = useState(false)

    const burguerSwitch = () => {
        console.log(BurguerMenu)
        setBurguerMenu(!BurguerMenu)
    }

    const closeBurguerMenu = () => {
        if(BurguerMenu){
            setBurguerMenu(false)
        }
    }

    return(
        <header>
            <div className="logoCont">
                <img src={Logo} className="erick"/>
            </div>
            <GiHamburgerMenu className="toggle" onClick={burguerSwitch} />
            <div className={`buttonsContainer ${BurguerMenu==true?"display":""}`}>
                <a className="navbarEnlaces" href="#aboutMe" onClick={closeBurguerMenu}><div className="buttonsNav">About me</div></a>
                <a className="navbarEnlaces" href="#projects" onClick={closeBurguerMenu}><div className="buttonsNav">Projects</div></a>
                <a className="navbarEnlaces" href="#experience" onClick={closeBurguerMenu}><div className="buttonsNav">Experience</div></a>
                <a className="navbarEnlaces" href="#contactMe" onClick={closeBurguerMenu}><div className="buttonsNav">Contact me</div></a>
            </div>
        </header>
    )
}

export default NavbarSection