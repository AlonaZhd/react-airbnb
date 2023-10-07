
import "./title.css";

function Title({title, raiting, reviev, city, country, superhost}) {
// console.log(title, raiting, reviev, city, country, superhost)

    return (
        <div className="title__wrapp">
            <h1 className='title__text'>{title}</h1>
            <div className='title__sub-block'>
                <span className="title__sub-value">{raiting} рейтинг</span>
                <span className="title__sub-value">{reviev} відгуків</span>
                <span className="title__sub-value">{city}, {country}</span>
                {superhost && <span className="title__sub-value">Супер-хост</span>}
            </div>
        </div>
    );
}

export default Title;