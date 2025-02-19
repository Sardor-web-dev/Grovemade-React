import "./Navbar.css"

function Navbar() {
    return (
        <>
        <div className="nav_container">
            <div className="first">
                <p className="p">Shop</p>
                <p className="p">Explore</p>
            </div>
            <div className="center">
                <img src="src/assets/logo2.png" alt="" />
            </div>
            <div className="end">
                <p className="p">My cart</p>
            </div>
        </div>
        </>
    );
}

export default Navbar;