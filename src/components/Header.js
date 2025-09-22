import { useState } from "react";
import { logoUrl } from "../constants";

const Header = () => {
    const [isLoggedin, setLoggedin] = useState(false);
    return (
        <div className="header">
            
            <div className="logo-container">
                <img 
                className="logo" 
                src={logoUrl}
                alt="Logo" 
                /> 
            </div>
            {(isLoggedin)?
            (
            <div className="nav-items">
                <ul className="items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li onClick={() => setLoggedin(!isLoggedin)}>Logout</li>
                </ul>
            </div>
            ) :
            (
                <div className="nav-items">
                <ul className="items">
                    <li onClick={() => setLoggedin(!isLoggedin)}>Login</li>
                </ul>
            </div>
            )}

        </div>
    )

}

export default Header;