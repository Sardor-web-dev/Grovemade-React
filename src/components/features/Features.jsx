import "./Features.css"

function Features() {
    return (
        <>
        <div className="head">
            <div className="txt">
                <h1>Featured Products</h1>
                <span>See What’s Trending Right Now</span>
            </div>
            </div>
            <div className="products">
                <div className="smth">
                    <img src="src/assets/macsafe.png" alt="" />
                    <p>Walnut MagSafe Stand</p>
                    <span>$120</span>
                </div>
                <div className="smth">
                    <img src="src/assets/mack.png" alt="" />
                    <p>Walnut Laptop Riser</p>
                    <span>$120</span>
                </div>
                <div className="smth">
                    <img src="src/assets/ipad.png" alt="" />
                    <p>Walnut iPad Stand</p>
                    <span>$120</span>
                </div>
                <div className="smth">
                    <img src="src/assets/iMac.png" alt="" />
                    <p>Walnut Monitor Stand</p>
                    <span>$120</span>
                </div>
            </div>
        </>
    );
}

export default Features;