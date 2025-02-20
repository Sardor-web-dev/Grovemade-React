import "./Work.css"
import { PICTURES } from "./pics";

function Work() {
    return (
        <>
        <div className="header">
                <h1>Make Work Meaningful</h1>
                <p>We're here because we believe that your work deserves the best. A team that loves working together is the magic that makes it all happen.</p>
        </div>
        <div className="pictures">
          {
            PICTURES.map((picture) => (<img key={picture.id} src={picture.img} alt=""/>))
          }
        </div>
        <div className="some">
            <h1>We Hope You'll Join Us</h1>
            <span>READ MORE ABOUT OUR STORY</span>
        </div>
        </>
    );
}

export default Work;