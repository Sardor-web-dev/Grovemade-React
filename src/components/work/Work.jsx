import "./Work.css"

function Work() {
    const pics = [
        {
            id: 1,
            img:"./"
        },
    ]
    return (
        <>
        <div className="header">
                <h1>Make Work Meaningful</h1>
                <p>We're here because we believe that your work deserves the best. A team that loves working together is the magic that makes it all happen.</p>
        </div>
        <div className="pictures">
            {
                pics.map((pic, id) => ( key = id,   pic = pic))
            }
        </div>
        </>
    );
}

export default Work;