import { useState } from "react";
import { logoUrl } from "../constants";
import { Link } from "react-router";

const Header = () => {
    const [isLoggedin, setLoggedin] = useState(true);
    return (
        <div className="header">
            
            <div className="logo-container">
                <Link to="/"><img 
                className="logo" 
                src={logoUrl}
                alt="Logo" 
                /> </Link>
            </div>
            {(isLoggedin)?
            (
            <div className="nav-items">
                <ul className="items">
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/cart">Cart</Link></li>
                    <li><Link to = "/about">About Us</Link></li>
                    <li onClick={() => setLoggedin(!isLoggedin)}><Link to ="/login">Logout</Link></li>
                </ul>
            </div>
            ) :
            (
                <div className="nav-items">
                <ul className="items">
                    <li onClick={() => {setLoggedin(!isLoggedin);}}><Link to="/">Login</Link></li>
                </ul>
            </div>
            )}

        </div>
    )

}

export default Header;