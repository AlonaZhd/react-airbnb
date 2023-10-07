
import Heading from "../heading";
import "./contact.css";

function Contact({name, imgSrc, rate, response, info, phone}) {

    return (
        <div className="contact__wrapp">
            <div className="contact__item">
                <img className="contact__img" src={imgSrc} alt={name}></img>
                <div className="contact__row">
                    <Heading>{name}</Heading>
                    <div className='contact__sub-block'>
                        <span className="contact__sub-value">{phone}</span>
                        <span className="contact__sub-value">{response}</span>
                        <span className="contact__sub-value">{rate}% відсотків швидкості відгуку</span>
                    </div>
                </div>
            </div>
            <span className="contact__sub-value">{info}</span>
        </div>
    );
}

export default Contact;