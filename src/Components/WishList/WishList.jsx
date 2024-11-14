import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishList, removeFromWishList } from "../../utility/addToDB";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const WishList = () => {
    const[wishList, setWishList] = useState([]);
    const AllGadget = useLoaderData();

    useEffect(() => {
        const StoreWish = getWishList()
        const wishGadget = AllGadget.filter(gadget => StoreWish.includes(gadget.product_id))
        setWishList(wishGadget)
    },[AllGadget])  
    return (
    <div>
            <Helmet>
                <title>Gadget heaven | WishList</title>
            </Helmet>
          <div className="w-11/12 mx-auto mt-5">
            <h3 className="text-2xl">WishList</h3>
            {
                wishList.map(gadget => (
                    <div key={gadget.product_id} className='flex justify-between items-center border-b-2 border-gray-200 py-4'>
                        <div>
                            <img src={gadget.product_image} alt={gadget.name} className='w-20 h-20 object-cover' />
                        </div>
                        <div>
                            <h3 className='text-xl font-bold'>{gadget.name}</h3>
                            <p className='text-gray-500'>{gadget.description}</p>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold'>${gadget.price}</h3>
                        </div>
                        <div>
                            <Link to="/wishlist"><button onClick={()=>removeFromWishList(gadget.product_id)} className="btn btn-circle btn-outline">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </button></Link>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    );
};

export default WishList;