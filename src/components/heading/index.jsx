
import "./heading.css";

function Heading({ children, border }) {
    return (
        <h2 className={`heading ${border ? 'heading--border' : ''}`}>{children}</h2>
    );
}

export default Heading;