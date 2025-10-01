import { useState } from "react";
import { logoUrl } from "../constants";
import { Link } from "react-router";

const Header = () => {
    const [isLoggedin, setLoggedin] = useState(false);
    return (
        <div className="header">
            
            <div className="logo-container">
                <Link to="/home"><img 
                className="logo" 
                src={logoUrl}
                alt="Logo" 
                /> </Link>
            </div>
            {(isLoggedin)?
            (
            <div className="nav-items">
                <ul className="items">
                    <li><Link to = "/home" style={{ textDecoration: 'none', color: 'inherit'}}>Home</Link></li>
                    <li><Link to = "/cart" style={{ textDecoration: 'none', color: 'inherit'}}>Cart</Link></li>
                    <li><Link to = "/about" style={{ textDecoration: 'none', color: 'inherit'}}>About Us</Link></li>
                    <li onClick={() => setLoggedin(!isLoggedin)}><Link to ="/" style={{ textDecoration: 'none', color: 'inherit'}}>Logout</Link></li>
                </ul>
            </div>
            ) :
            (
                <div className="nav-items">
                <ul className="items">
                    <li onClick={() => {setLoggedin(!isLoggedin);}}><Link to="/home" style={{ textDecoration: 'none', color: 'inherit'}}>Login</Link></li>
                </ul>
            </div>
            )}

        </div>
    )

}

export default Header;