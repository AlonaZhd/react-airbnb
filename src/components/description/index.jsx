import Heading from "../heading";

import "./description.css";

function Description({ title, children }) {
    return (
        <div className="description">
            <Heading>{title}</Heading>
            <p className="description__text">{children}</p>
        </div>
    );
}

export default Description;