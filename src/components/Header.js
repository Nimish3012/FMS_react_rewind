import { logoUrl } from "../constants";

const Header = () => {
    return (
        <div className="header">
            
            <div className="logo-container">
                <img 
                className="logo" 
                src={logoUrl}
                alt="Logo" 
                /> 
            </div>

            <div className="nav-items">
                <ul className="items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    )

}

export default Header;