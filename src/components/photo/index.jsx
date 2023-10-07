import "./photo.css";


function Photo({src, name}) {
    return (
        <div className="photo">
            <img src={src} alt={name}></img>
        </div>
    );
}

export default Photo;