import "./Footer.css"

function Footer() {
    return (
        <>
        <div className="footer">
            <div className="first_title">
                <div className="left_side">
                    <div className="categories">
                        <p>Shop</p>
                        <p>About</p>
                        <p>Journal</p>
                        <p>Support</p>
                        <p>COVID-19 Info</p>
                        <p>Order Status</p>
                        <p>Corporate Sales</p>
                    </div>
                    <div className="signup">
                        <div className="without">
                        <p>Newsletter Signup</p>
                        <span>Sign up to our Newsletter to hear about new product releases, learn about our design process, and everything else going on behind the scenes at Grovemade.</span>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="right_side">
                    <img src="src/assets/go.png" alt="" />
                </div>
            </div>
            <div className="down">
                <div className="privaci">
                <p>©2020 Grovemade</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Site by Department</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;