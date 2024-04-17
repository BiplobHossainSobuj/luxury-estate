import React from 'react';

const FavouriteEstate = ({estate}) => {
    const { id, price, area, description,facilities, image, estate_title, location, segment_name, status } = estate;
    return (
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
                    
                    </div>
                </div>
            </div>
    );
};

export default FavouriteEstate;