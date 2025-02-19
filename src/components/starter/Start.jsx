import "./Start.css"

function Start() {
    return (
        <>
        <div className="cont">
            <div className="text2">
                <h1>Design Inspires</h1>
                <span className="gray">Build your dream workspace, so you can get your best work done.</span>
                <p className="startt">GET STARTED</p>
            </div>
        </div>
        <div className="imgs">
            <div className="one">
                <img src="src/assets/nouts.png" alt="" />
                <p className="name">Desk Pads</p>
                <span>LEARN MORE</span>
            </div>
            <div className="two">
                <img src="src/assets/pc.png" alt="" />
                <p className="name">Laptop Stands</p>
                <span>LEARN MORE</span>
            </div>
        </div>
        </>
    );
}

export default Start;

