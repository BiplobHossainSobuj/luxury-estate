import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';
import { savedFavouriteEstates } from "../utility/localStorage";
const EstateDetails = () => {

    const { state } = useLocation();
    const { id, price, area, description, image, estate_title, location, segment_name, status } = state;
    const handleFavourite =()=>{
        savedFavouriteEstates(id);
    }
    return (
        
        <div className="hero min-h-screen bg-base-200 rounded-xl my-10">
            <Helmet>
                <title>Estate Details</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="max-w-sm lg:max-w-2xl rounded-lg shadow-2xl" />
                <div className="divide-y divide-slate-200 space-y-4">
                    <div>
                        <h1 className="text-5xl font-bold">{estate_title}</h1>
                        <p className="py-6">{segment_name}</p>
                    </div>
                    <p className='text-black font-bold'>{location}</p>
                    
                    <div>
                        <p> <span className='font-bold'>{description}</span> </p>
                        <div className='font-bold text-xl text-orange-600'>
                            <p className='badge badge-outline bg-base-00'>#{status}</p>
                        </div>
                    </div>
                    <div>
                        <p>Area <span className='ms-12 font-bold'>{area}</span></p>
                        <p>Price <span className='ms-24 font-bold'>{price}</span></p>
                        <p>Rating <span className='ms-28 font-bold'></span></p>
                        <p>Year of publising <span className='ms-10 font-bold'></span></p>
                        
                    </div>
                    <div>
                        <button onClick={handleFavourite} className="btn btn-info ms-4 px-8">Add To Favourite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;