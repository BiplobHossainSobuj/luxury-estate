import React from 'react';
import { useLocation } from 'react-router-dom';
const EstateDetails = () => {
    const { state } = useLocation();
    const {id, area, description, image, estate_title, location, segment_name, status} = state;
    return (
        <div>
            <h1>{estate_title}</h1>
        </div>
    );
};

export default EstateDetails;