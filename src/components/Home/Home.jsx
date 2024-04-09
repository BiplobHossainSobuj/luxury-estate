import React from 'react';
import { Helmet } from "react-helmet";
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Luxury Estate</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <h1 className="text-2xl">
                this is home
            </h1>
        </div>
    );
};

export default Home;