import React from 'react';
import { Helmet } from "react-helmet";
import Slider from './Slider';
import Estates from '../Estates/Estates';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Luxury Estate</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            
            <Slider></Slider>
            <Estates></Estates>
        </div>
    );
};

export default Home;