import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { getFavouriteEstates } from "../utility/localStorage";
import FavouriteEstate from "./FavouriteEstate";

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
        <div className="space-y-4">
            <Helmet>
                <title>Favorite Estates</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
        {
            properties.map(property=><FavouriteEstate estate={property} key={property.id} ></FavouriteEstate>)
        }
        </div>
    );
};

export default Favourite;