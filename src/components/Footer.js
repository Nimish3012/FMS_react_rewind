const Footer = () => {
    return (
        <footer className="footer" style={{textAlign: "center", padding: "1rem", borderRadius: "10px", background: "#f2f2f2", marginTop: "2rem"}}>
            <p>&copy; {new Date().getFullYear()} Food Ordering App.  All rights reserved.  Crafted by Nimish.</p>
        </footer>
    );
}

export default Footer;