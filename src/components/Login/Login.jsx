import React from 'react';
import { Helmet } from "react-helmet";

const Login = () => {
    return (
        <div>
            <Helmet>
                <title>User Login</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <h1>this is login</h1>
        </div>
    );
};

export default Login;