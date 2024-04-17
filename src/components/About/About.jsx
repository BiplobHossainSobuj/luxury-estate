import { Helmet } from "react-helmet";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About Us</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <p>
                Our journey began our compnary with a simple mission: to attract consumer. Since then, we have grown into a massive team of passionate individuals committed to delivering excellence in everything we do.

                What sets us apart is our relentless pursuit of innovation and customer satisfaction. We believe in core values or principles and strive to uphold them in every aspect of our business. Whether it's through unique features of your products/services, our personalized approach to customer service, or our commitment to sustainability, we are constantly pushing the boundaries to exceed your expectations.
            </p>
        </div>
    );
};

export default About;