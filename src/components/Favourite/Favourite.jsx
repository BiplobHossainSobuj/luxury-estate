import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { getFavouriteEstates } from "../utility/localStorage";

const Favourite = () => {
    const allProperties = useLoaderData();
    const [properties,setProperties] = useState([]);
    useEffect(() => {
        const storedFavouriteEstateId = getFavouriteEstates();
        if (allProperties.length) {
            const favourite = [];
            for (const id of storedFavouriteEstateId) {
                const propery = allProperties.find(estate => estate.id === id);
                if (propery) {
                    favourite.push(propery)
                }
            }
            setProperties(favourite);
        }
    }, [allProperties]);
    return (
        <div>
            <Helmet>
                <title>Favorite Estates</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
        <h1>{properties.length}</h1>
        {
            properties.map(property=><li key={property.id} >{property.estate_title}</li>)
        }
        </div>
    );
};

export default Favourite;