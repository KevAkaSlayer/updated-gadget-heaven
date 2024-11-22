import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getCartList, removeFromCart } from "../../utility/addToDB";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import successImg from "../../assets/Group.png";

const CartList = () => {
  const [cartList, setCartList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const AllGadget = useLoaderData();
  const navigate = useNavigate();

  const handleModalToggle = () => {
    if (cartList.length > 0) {
      setOpenModal(!openModal);
    }
  };

  useEffect(() => {
    const StoreCart = getCartList();
    const cartGadget = AllGadget.filter(gadget =>
      StoreCart.includes(gadget.product_id)
    );
    setCartList(cartGadget);

    const initialTotal = cartGadget.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(initialTotal);
  }, [AllGadget]);

  const handleSort = () => {
    const sortedList = [...cartList].sort((a, b) => b.price - a.price);
    setCartList(sortedList);
  };

  const confirmPurchase = () => {
    setOpenModal(false);
    setCartList([]);
    setTotalPrice(0);
    localStorage.removeItem("cartList");
    navigate("/");
  };

  return (
    <div>
      <Helmet>
        <title>Gadget Heaven | CartList</title>
      </Helmet>

      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center mt-10 p-4 gap-4">
        <h3 className="text-2xl font-bold">Cart</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <p className="text-lg font-medium">Total Cost: ${totalPrice}</p>
          <button
            onClick={handleSort}
            className="btn flex items-center gap-2 rounded-3xl text-[#9538E2] border border-[#9538E2] px-4 py-2"
          >
            Sort by Price
            <img
              className="w-5 h-5"
              src="https://i.ibb.co.com/BfG52zc/icons8-sort-50.png"
              alt="sort icon"
            />
          </button>
          <Button
            onClick={handleModalToggle}
            color="purple"
            variant="gradient"
            disabled={cartList.length === 0}
            className="rounded-3xl px-6 py-2"
          >
            Purchase
          </Button>
        </div>
      </div>

      {/* Cart Items Section */}
      <div className="p-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cartList.map(gadget => (
          <div
            key={gadget.product_id}
            className="flex flex-col sm:flex-row justify-between items-center rounded-xl shadow-md border border-gray-200 p-4 gap-4"
          >
            <img
              src={gadget.product_image}
              alt={gadget.name}
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded"
            />
            <div className="flex flex-col text-center sm:text-left">
              <h3 className="text-lg font-bold">{gadget.product_title}</h3>
              <p className="text-gray-500 text-sm">{gadget.description}</p>
              <h3 className="text-xl font-bold">${gadget.price}</h3>
            </div>
            <div>
              <button
                onClick={() => removeFromCart(gadget.product_id)}
                className="btn btn-circle btn-outline"
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

      {/* Modal Section */}
      <Dialog
        open={openModal}
        handler={handleModalToggle}
        className="max-w-xs mx-auto"
      >
        <img src={successImg} alt="success" className="w-20 h-20 mx-auto" />
        <DialogHeader className="justify-center text-xl font-bold">
          Payment Successful
        </DialogHeader>
        <DialogBody className="flex flex-col items-center space-y-2 text-center">
          <p>Thanks for purchasing!</p>
          <p>
            Total Price: <strong>${totalPrice}</strong>
          </p>
        </DialogBody>
        <DialogFooter className="flex justify-center">
          <Button
            className="btn w-1/2 bg-[#9538E2] rounded-3xl"
            onClick={confirmPurchase}
          >
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default CartList;
