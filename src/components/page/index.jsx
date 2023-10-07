import Header from "../header";
import Title from "../title";
import data from '../../data'
import Photo from "../photo";
import Price from "../price";
import RoomList from "../room-list";
import Description from "../description";
import Details from "../details";
import Amenities from "../amenities";
import Contact from "../contact";
import Properties from "../properties";
import Reviews from "../reviews";
import Attractions from "../attractions";

import "./page.css";
// console.log(data)

function Page() {
    return (
        <div className="page">
            <Header></Header>
            <Title 
                title={data.listing_name}
                raiting={data.reviews_summary.average_rating}
                reviev={data.reviews_summary.total_reviews}
                city={data.location.city}
                country={data.location.country}
                superhost={data.superhost}
            ></Title>
            <Photo
                src={data.image}
                name={data.listing_name}
            ></Photo>
            <Price 
                price={data.price.original_price}
                discount={data.price.discounted_price}
                currency={data.price.currency}
                cleaning={data.price.cleaning_fee}
                service={data.price.service_fee}
                checkin={data.availability.checkin_date}
                checkout={data.availability.checkout_date}
            ></Price>
            <RoomList
                rooms={data.roomTypes}
            ></RoomList>
            <Description title="Опис" children={data.description}></Description>
            <Details title="Деталі властивості:" 
                guests={data.property_details.guests}
                bedrooms={data.property_details.bedrooms}
                beds={data.property_details.beds}
                baths={data.property_details.baths}
            ></Details>
            <Description title="Про сусідів" children={data.neighborhood_info}></Description>
            <Amenities
                pool={data.amenities.hasPool}
                gym={data.amenities.hasGym}
                breakfast={data.amenities.hasFreeBreakfast}
                wifi={data.amenities.hasFreeWiFi}
                parking={data.amenities.hasParking}
                pets={data.amenities.hasPetsAllowed}
                shuttle={data.amenities.hasAirportShuttle}
                security={data.amenities.hasConciergeService}
                meetingRoom={data.amenities.hasRoomService}
                child={data.amenities.hasChildFriendly}
            ></Amenities>
            <Contact 
                name={data.contact_info.name}
                imgSrc={data.contact_info.image}
                rate={data.contact_info.response_rate}
                response={data.contact_info.response_time}
                info={data.contact_info.info}
                phone={data.contact_info.phone}
            ></Contact>
            <Properties 
                rules={data.additional_properties.house_rules}
                cancellation={data.additional_properties.cancellation_policy}
                transport={data.additional_properties.local_transportation}
                languages={data.additional_properties.host_languages}
                offers={data.additional_properties.special_offers}
                instructions={data.additional_properties.check_in_instructions}
            ></Properties>
            <Reviews
                reviews={data.guestReviews}
            ></Reviews>
            <Attractions
                attractions={data.nearbyAttractions}
            ></Attractions>
        </div>
    );
}

export default Page;