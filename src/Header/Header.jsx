import './header.css';

function Header() {
    return (
        <div className="header_main padded">
            <div className="logo">
                <h2>LOGO</h2>
            </div>
            <div className="nav_links">
                <h3><a href='#'>Home</a></h3>
                <h3><a href='#'>About</a></h3>
                <h3><a href='#'>Services</a></h3>
                <h3><a href='#'>Portfolio</a></h3>
                <h3><a href='#'>Pricing</a></h3>
                <h3><a href='#'>Blog</a></h3>
                <h3><a href='#'>Contact</a></h3>
            </div>
        </div>
    );
}

export default Header;