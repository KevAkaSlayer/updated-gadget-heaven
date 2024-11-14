import { useEffect, useState } from "react";
import { useLoaderData,useNavigate } from "react-router-dom";
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
    const cartGadget = AllGadget.filter(gadget => StoreCart.includes(gadget.product_id));
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
    localStorage.removeItem('cartList');
    navigate("/");
  };

  return (
    <div>
      <Helmet>
                <title>Gadget heaven | CartList</title>
      </Helmet>
      <div className="flex mt-10 justify-between p-4">
        <h3 className="text-2xl">Cart</h3>
        <div className="flex gap-4 items-center">
          <p>Total Cost: $ {totalPrice}</p>
          <button onClick={handleSort} className="flex btn rounded-3xl text-[#9538E2]">
            Sort by Price
            <span><img className="w-5 h-5" src="https://i.ibb.co.com/BfG52zc/icons8-sort-50.png" alt="" /></span>
          </button>
          <Button onClick={handleModalToggle} color="purple" variant="gradient" disabled={cartList.length === 0} className="rounded-3xl">
            Purchase
          </Button>
        </div>
      </div>
    <div className="p-4 gap-y-3">
    {
        cartList.map(gadget => (
          <div key={gadget.product_id} className='flex justify-between items-center rounded-xl shadow-xl my-4 border-gray-200 p-4'>
            <div>
              <img src={gadget.product_image} alt={gadget.name} className='w-20 h-20 object-cover' />
            </div>
            <div className="flex flex-col">
              <h3 className='text-xl font-bold'>{gadget.product_title}</h3>
              <p className='text-gray-500'>{gadget.description}</p>
              <h3 className='text-xl font-bold'>${gadget.price}</h3>
            </div>
            <div>
              <Link to="/cartlist">
                <button onClick={() => removeFromCart(gadget.product_id)} className="btn btn-circle btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        ))
      }
    </div>

      {/* Modal */}
      <Dialog open={openModal} handler={handleModalToggle} className="max-w-xs mx-auto">
        <img src={successImg} alt="success" className="w-20 h-20 mx-auto" />
        <DialogHeader className="justify-center text-xl font-bold">Payment Successful</DialogHeader>
        <DialogBody className="flex flex-col items-center space-y-2 text-center">
          <p>Thanks for purchasing!</p>
          <p>Total Price: <strong>${totalPrice}</strong></p>
        </DialogBody>
        <DialogFooter className="flex justify-center">
          <Button className="btn w-1/2 bg-[#9538E2] rounded-3xl" onClick={confirmPurchase}>
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default CartList;
