import Box from "../box/box";
import Heading from "../heading";

import "./room-list.css";

function RoomList({ rooms }) {
    return (
        <div className="room-list">
            <Heading>Типи номерів</Heading>

            <div className="room-list__wrapp">
                {rooms.map(room => (
                    <Box className="room__item" key={room.id}>
                        <span className="room__item--title">{room.type}</span>
                        <span>Кількість гостей: {room.capacity}</span>
                        <span className="room__item--price">{room.currency}{room.pricePerNight}</span>
                    </Box>
                ))}
            </div>
        </div>
    );
}

export default RoomList;