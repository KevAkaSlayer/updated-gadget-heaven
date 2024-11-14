
const Footer = () => {
    return (
        <div className="bg-[#ffff] shadow-2xl mt-36">
            <div className="w-11/12 mx-auto flex flex-col p-20 gap-7">
                <h3 className="text-center text-2xl font-bold">Gadget Heaven</h3>
                <p className="text-center text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
                <hr />
                <div className="flex justify-around">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xl">Services</h4>
                        <p className="text-gray-600">Product Support</p>
                        <p className="text-gray-600">order Tracking</p>
                        <p className="text-gray-600">Shipping & Delivery</p>
                        <p className="text-gray-600">Returns</p>

                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xl">Company</h4>
                        <p className="text-gray-600">About Us</p>
                        <p className="text-gray-600">Careers</p>
                        <p className="text-gray-600">Contact</p>
                        
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xl">Legal</h4>
                        <p className="text-gray-600">Terms of Service</p>
                        <p className="text-gray-600">Privacy Policy</p>
                        <p className="text-gray-600">Cookie Policy</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;         