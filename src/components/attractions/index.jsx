import Box from "../box/box";
import Heading from "../heading";
import List from "../list";
import ListItem from "../list-item";

import "./attractions.css";

function Attractions({ attractions }) {
    return (
        <Box className="attractions__wrapp" shadow>
            <Heading border>Додаткові властивості</Heading>
            {attractions.map(attractions => (
                <List  key={attractions.id}>
                    <ListItem>
                        <a className="attractions__link" href={attractions.link}>{attractions.name}</a>
                    </ListItem>
                </List>
            ))}
        </Box>
    );
}

export default Attractions;