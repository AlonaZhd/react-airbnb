import Box from "../box/box";
import Heading from "../heading";

import "./reviews.css";

function Reviews({ reviews }) {
    return (
        <div className="reviews-list">
            <Heading>Відгуки клієнтів</Heading>

            <div className="reviews-list__wrapp">
                {reviews.map((reviews, index) => (
                    <Box className="reviews__item" key={index + 'r'}>
                        <div className="reviews__item--header">
                            <span className="reviews__item--title">{reviews.guestName}</span>
                            <span>Рейтинг: {reviews.rating}</span>
                        </div>
                        <span className="reviews__item--text">{reviews.review}</span>
                    </Box>
                ))}
            </div>
        </div>
    );
}

export default Reviews;