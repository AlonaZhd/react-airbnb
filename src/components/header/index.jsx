
import "./header.css";

import logo from "./logo-airbnb.svg"

function Header() {
    return (
        <header className="header">
            <a href="/">
                <img src={logo} alt="logo-airbnb" height={32}></img>
            </a>
        </header>
    );
}

export default Header;