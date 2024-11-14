import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Gadget heaven | Home</title>
            </Helmet>
            <Banner />
            <Gadgets />
        </div>
    );
};

export default Home;