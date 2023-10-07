import Box from "../box/box";
import Heading from "../heading";
import List from "../list";
import ListItem from "../list-item";
import icon_guest from "./icon_guest.svg"
import icon_bedroom from "./icon_bedroom.svg"
import icon_bed from "./icon_bed.svg"
import icon_bathroom from "./icon_bathroom.svg"

import "./details.css";

function Details({ guests, bedrooms, beds, baths }) {

    return (
        <Box className="details__wrapp" shadow>
            <List>
                <Heading border>Деталі властивості:</Heading>
                <ListItem imageSrc={icon_guest}>
                    <span>{guests}</span>
                    {guests === 1 ? (
                        <span>гість</span>
                    ) : (
                        <span>гостей</span>
                    )}
                </ListItem>

                <ListItem imageSrc={icon_bedroom}>
                    <span>{bedrooms}</span>
                    {bedrooms === 1 ? (
                        <span>спальня</span>
                    ) : bedrooms > 1 && bedrooms < 5 ? (
                        <span>спальні</span>
                    ) : (
                        <span>спалень</span>
                    )}
                </ListItem>

                <ListItem imageSrc={icon_bed}>
                    <span>{beds}</span>
                    {beds === 1 ? (
                        <span>ліжко</span>
                    ) : (
                        <span>ліжка</span>
                    )}
                </ListItem>

                <ListItem imageSrc={icon_bathroom}>
                    <span>{baths}</span>
                    {baths === 1
                    ? 'ванна кімната'
                    : baths > 1 && baths < 5
                    ? 'ванні кімнати'
                    : 'ванних кімнат'}
                </ListItem>
            </List>
        </Box>
    );
}

export default Details;