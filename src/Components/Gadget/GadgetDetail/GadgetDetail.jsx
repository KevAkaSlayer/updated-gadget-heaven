import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToCart, addToWishList, getWishList } from "../../../utility/addToDB";
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

  const handleAddToCart = product_id => {
    addToCart(product_id);
  };

  const handleAddToWishList = product_id => {
    addToWishList(product_id);
    setIsInWishlist(true);
  };

  return (
    <div className="bg-[#9538E2]">
      <Helmet>
        <title>Gadget Heaven | Details</title>
      </Helmet>
      <div className="w-11/12 mx-auto p-5">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-5 text-center text-white">
          <h1 className="text-3xl font-bold">Product Details</h1>
          <p className="max-w-lg text-base">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
        </div>

        {/* Product Details Section */}
        {gadget && (
          <div className="flex flex-wrap justify-center items-start gap-6 mt-10 bg-base-100 shadow-xl p-5 rounded-lg">
            {/* Product Image */}
            <figure className="w-full md:w-1/2 p-5 flex justify-center">
              <img
                src={gadget.product_image}
                alt={gadget.product_title}
                className="object-cover rounded-lg max-w-full"
              />
            </figure>

            {/* Product Info */}
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <h2 className="text-2xl font-bold">{gadget.product_title}</h2>
              <p className="text-lg font-semibold">Price: $ {gadget.price}</p>
              <p className="text-gray-600 text-base">{gadget.description}</p>
              <h3 className="text-lg font-semibold">Specifications:</h3>
              <ul className="list-disc ml-5 text-gray-600 text-sm">
                {gadget.Specification.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold">Rating:</p>
                <div className="rating">
                  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                </div>
                <span className="bg-gray-200 border-2 rounded-2xl p-1">{gadget.rating}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleAddToCart(gadget.product_id)}
                  className="flex items-center gap-2 bg-[#9538E2] text-white rounded-3xl px-4 py-2"
                >
                  Add to Cart{" "}
                  <span>
                    <img
                      className="w-6 h-6"
                      src="https://i.ibb.co.com/hMCf34C/icons8-cart.png"
                      alt="cart icon"
                    />
                  </span>
                </button>
                <button
                  onClick={() => handleAddToWishList(gadget.product_id)}
                  className={`btn rounded-full p-3 border-2 ${
                    isInWishlist ? "bg-gray-300 cursor-not-allowed" : "bg-white"
                  }`}
                  disabled={isInWishlist}
                >
                  <img
                    className="w-6 h-6"
                    src="https://i.ibb.co.com/dL2L3B9/icons8-heart-32.png"
                    alt="wishlist icon"
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GadgetDetail;
