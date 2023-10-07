import Box from "../box/box";
import Heading from "../heading";
import List from "../list";
import ListItem from "../list-item";
import imgPool from "./img-pool.svg"
import imgGym from "./img-gym.svg"
import imgBreakfast from "./img-breakfast.svg"
import imgWifi from "./img-wifi.svg"
import imgParking from "./img-parking.svg"
import imgPets from "./img-pets.svg"
import imgShuttle from "./img-shuttle.svg"
import imgSecurity from "./img-security.svg"
import imgMeetingRoom from "./img-meeting-room.svg"
import imgChild from "./img-child.svg"

import "./amenities.css";

function Amenities({ 
    pool,
    gym,
    breakfast,
    wifi,
    parking,
    pets,
    shuttle,
    security,
    meetingRoom,
    child,
 }) {
    console.log(imgPool)

    return (
        <Box className="amenities__wrapp" shadow>
            <List>
                <Heading border>Зручності:</Heading>
                    {pool && <ListItem imageSrc={imgPool}>Басейн</ListItem>}
                    {gym && <ListItem imageSrc={imgGym}>Спортивний зал</ListItem>}
                    {breakfast && (
                        <ListItem imageSrc={imgBreakfast}>Безкоштовний сніданок</ListItem>
                    )}
                    {wifi && <ListItem imageSrc={imgWifi}>Безкоштовний Wi-Fi</ListItem>}
                    {parking && (
                        <ListItem imageSrc={imgParking}>Безкоштовний вуличний паркінг</ListItem>
                    )}
                    {pets && (
                        <ListItem imageSrc={imgPets}>
                        Дозволено розміщення з домашніми тваринами
                        </ListItem>
                    )}
                    {shuttle && (
                        <ListItem imageSrc={imgShuttle}>Трансфер до/з аеропорту</ListItem>
                    )}
                    {security && (
                        <ListItem imageSrc={imgSecurity}>Консьєрж-сервіс</ListItem>
                    )}
                    {meetingRoom && (
                        <ListItem imageSrc={imgMeetingRoom}>Обслуговування номерів</ListItem>
                    )}
                    {child && (
                        <ListItem imageSrc={imgChild}>Підходить для дітей</ListItem>
                    )}
            </List>
        </Box>
    );
}

export default Amenities;