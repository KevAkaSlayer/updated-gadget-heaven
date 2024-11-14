import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const getCartList = () => {
    let cartList;
    if(localStorage.getItem('cartList') === null){
        cartList = [];
    }
    else{
        cartList = JSON.parse(localStorage.getItem('cartList'));
    }
    return cartList;
}

const addToCart = (product_id) => {
    const cartList = getCartList();
    if(cartList.includes(product_id)){
        return;
    }
    cartList.push(product_id);
    localStorage.setItem('cartList', JSON.stringify(cartList));
    toast.success(' Added to Cart! ', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

}

const removeFromCart = (product_id) => {
    const cartList = getCartList();
    const updatedCart = cartList.filter(gadget => gadget !== product_id);
    localStorage.setItem('cartList', JSON.stringify(updatedCart));
    window.location.reload();
    

}


const getWishList = () => {
    let wishList;
    if(localStorage.getItem('wishList') === null){
        wishList = [];
    }
    else{
        wishList = JSON.parse(localStorage.getItem('wishList'));
    }
    return wishList;
}

const addToWishList = (product_id) => {
    const wishList = getWishList();
    if(wishList.includes(product_id)){
        return;
    }
    wishList.push(product_id);
    localStorage.setItem('wishList', JSON.stringify(wishList));
    toast.success(' Added to WishList! ', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });


}

const removeFromWishList = (product_id) => {
    const wishList = getWishList();
    const updatedWishList = wishList.filter(gadget => gadget !== product_id);
    localStorage.setItem('wishList', JSON.stringify(updatedWishList));
    window.location.reload();
    
}


export {getCartList, addToCart, removeFromCart, getWishList, addToWishList, removeFromWishList};    