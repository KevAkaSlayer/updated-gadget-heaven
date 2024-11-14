import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
    const { product_id, product_title, product_image, price } = gadget;
    return (

        <div className="grid lg:grid-cols-2">
            <Card className="mt-6 w-80">
                <CardHeader color="" className="relative h-52">
                    <img className="w-full object-cover flex justify-center text-center items-center"
                        src={product_image}
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">

                    </Typography>
                    <Typography className="text-xl font-bold text-black">
                        {product_title}
                    </Typography>
                    <Typography>
                        Price : {price}$
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Link to={`/gadgets/${product_id}`}><Button className="btn bg-[#9538E2] text-white">View Details</Button></Link>
                </CardFooter>
            </Card>
        </div>

    );
};

Gadget.propTypes = {
    gadget: PropTypes.object.isRequired,
};


export default Gadget;