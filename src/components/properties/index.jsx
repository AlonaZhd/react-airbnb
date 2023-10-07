import Box from "../box/box";
import Heading from "../heading";
import List from "../list";
import ListItem from "../list-item";

import "./properties.css";

function Properties({ rules, cancellation, transport, languages, offers, instructions }) {

    return (
        <Box className="properties__wrapp" shadow>
            <Heading border>Додаткові властивості</Heading>
            <List>
                <ListItem title='Правила дому:'>
                    <span>{rules}</span>
                </ListItem>
                <ListItem title='Політика скасування:'>
                    <span>{cancellation}</span>
                </ListItem>
                <ListItem title='Місцевий транспорт:'>
                    <span>{transport}</span>
                </ListItem>
                <ListItem title='Мови хоста:'>
                    <span>{languages}</span>
                </ListItem>
                <ListItem title='Спеціальні пропозиції:'>
                    <span>{offers}</span>
                </ListItem>
                <ListItem title='Інструкції щодо реєстрації:'>
                    <span>{instructions}</span>
                </ListItem>
            </List>
        </Box>
    );
}

export default Properties;