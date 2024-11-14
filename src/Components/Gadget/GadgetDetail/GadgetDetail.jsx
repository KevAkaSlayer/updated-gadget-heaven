import { useState,useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToCart, addToWishList ,getWishList } from "../../../utility/addToDB";
import { Helmet } from "react-helmet-async";

const GadgetDetail = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const gadget = data.find(gadget => gadget.product_id === product_id);

    const [isInWishlist, setIsInWishlist] = useState(false);

    useEffect(() => {
        const wishlist = getWishList();
        if (wishlist.includes(product_id)) {
            setIsInWishlist(true);
        }
    }, [product_id]);

    const handleAddToCart = (product_id) => {
        addToCart(product_id);
    };

    const handleAddToWishList = (product_id) => {
        addToWishList(product_id);
        setIsInWishlist(true); 
    };

    return (
        <div className="bg-[#9538E2]">
            <Helmet>
                <title>Gadget heaven | Details</title>
            </Helmet>
            <div className="w-11/12 mx-auto p-5">
                <div className="relative h-[300px] flex flex-col items-center gap-5">
                    <h1 className="text-center text-3xl font-bold text-white">Product Details</h1>
                    <p className="w-1/2 text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className="absolute left-80 bottom-56 w-[1280px] h-[400px] flex justify-center mb-20">
                    {gadget && (
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure className="w-2/5 p-8">
                                <img src={gadget.product_image} alt="Product" />
                            </figure>
                            <div className="card-body w-3/5">
                                <h2 className="card-title">{gadget.product_title}</h2>
                                <p className="text-md font-semibold">Price: $ {gadget.price}</p>
                                <p className="text-gray-600 font-semibold text-base">{gadget.description}</p>
                                <h3>Specification</h3>
                                <ul className="list-disc ml-5">
                                    {gadget.Specification.map((spec, index) => (
                                        <li className="text-gray-600 text-sm" key={index}>{spec}</li>
                                    ))}
                                </ul>
                                <div className="flex items-center gap-2">Rating: 
                                <div className="rating">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked/>
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    </div>
                                    <span className="border-2 bg-gray-200 rounded-2xl p-1">{gadget.rating}</span></div>
                                <div className="card-actions items-center">
                                    <button onClick={() => handleAddToCart(gadget.product_id)} className="flex gap-2 bg-[#9538E2] rounded-3xl p-3 text-white">
                                        Add to Cart <span><img className='w-7 h-7' src="https://i.ibb.co.com/hMCf34C/icons8-cart.png" alt="" /></span>
                                    </button>
                                    <button 
                                        onClick={() => handleAddToWishList(gadget.product_id)}
                                        className="bg-white btn border-2 rounded-full p-2"
                                        disabled={isInWishlist}  
                                    >
                                        <img className="w-7 h-7" src="https://i.ibb.co.com/dL2L3B9/icons8-heart-32.png" alt="Add to Wishlist" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GadgetDetail;
