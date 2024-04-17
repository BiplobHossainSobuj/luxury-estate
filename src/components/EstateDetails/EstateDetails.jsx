import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';
import { savedFavouriteEstates } from "../utility/localStorage";
const EstateDetails = () => {

    const { state } = useLocation();
    const { id, price, area, description,facilities, image, estate_title, location, segment_name, status } = state;
    const handleFavourite = () => {
        savedFavouriteEstates(id);
    }
    return (

        <div className="">
            <Helmet>
                <title>Estate Details</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{segment_name}</h1>
                        <p className="mb-5">{description}</p>
                    </div>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p className="text-left">{description}</p>
                    <p className="text-left">{facilities[0]},{facilities[1] } </p>
                    <p className="text-left">{location}</p>
                    <p className="text-left">{area}</p>
                    <p className="text-left">{price}</p>
                    <p className="text-left">{status}</p>
                    <div className="card-actions justify-end">
                    <button onClick={handleFavourite} className="btn btn-info ms-4 px-8">Add To Favourite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;