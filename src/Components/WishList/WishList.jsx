import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishList, removeFromWishList } from "../../utility/addToDB";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const AllGadget = useLoaderData();

  useEffect(() => {
    const StoreWish = getWishList();
    const wishGadget = AllGadget.filter(gadget => StoreWish.includes(gadget.product_id));
    setWishList(wishGadget);
  }, [AllGadget]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Helmet>
        <title>Gadget Heaven | WishList</title>
      </Helmet>
      <div className="w-11/12 mx-auto mt-5">
        <h3 className="text-2xl font-bold mb-5">Your WishList</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishList.map(gadget => (
            <div
              key={gadget.product_id}
              className="flex flex-col bg-white rounded-lg shadow-md p-4 border border-gray-200"
            >
              {/* Image Section */}
              <div className="flex justify-center mb-4">
                <img
                  src={gadget.product_image}
                  alt={gadget.name}
                  className="w-32 h-32 object-cover rounded-md"
                />
              </div>

              {/* Gadget Details */}
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-700">{gadget.name}</h3>
                <p className="text-sm text-gray-500 mt-2">{gadget.description}</p>
              </div>

              {/* Price and Remove Button */}
              <div className="mt-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-purple-600">${gadget.price}</h3>
                <button
                  onClick={() => removeFromWishList(gadget.product_id)}
                  className="p-2 border-2 border-red-500 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {wishList.length === 0 && (
          <div className="text-center mt-10">
            <p className="text-lg text-gray-600">Your wishlist is empty.</p>
            <Link
              to="/"
              className="text-purple-600 font-bold underline mt-2 inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishList;
