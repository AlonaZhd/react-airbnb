

import "./list.css";

function List({ children, }) {
    // console.log(currency, cleaning, service, checkin, checkout)
    return (
        <ul className="list">
            {children}
        </ul>
    );
}

export default List;