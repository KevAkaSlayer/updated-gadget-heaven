const Footer = () => {
    return (
        <div className="bg-white shadow-2xl mt-36">
            <div className="w-11/12 mx-auto flex flex-col p-10 lg:p-20 gap-7">
                {/* Heading and Description */}
                <h3 className="text-center text-2xl font-bold">Gadget Heaven</h3>
                <p className="text-center text-gray-600">
                    Leading the way in cutting-edge technology and innovation.
                </p>
                <hr />

                {/* Footer Links Section */}
                <div className="flex flex-wrap justify-around gap-8 lg:gap-0">
                    {/* Services Section */}
                    <div className="flex flex-col gap-4 text-center lg:text-left">
                        <h4 className="text-xl font-bold">Services</h4>
                        <p className="text-gray-600">Product Support</p>
                        <p className="text-gray-600">Order Tracking</p>
                        <p className="text-gray-600">Shipping & Delivery</p>
                        <p className="text-gray-600">Returns</p>
                    </div>

                    {/* Company Section */}
                    <div className="flex flex-col gap-4 text-center lg:text-left">
                        <h4 className="text-xl font-bold">Company</h4>
                        <p className="text-gray-600">About Us</p>
                        <p className="text-gray-600">Careers</p>
                        <p className="text-gray-600">Contact</p>
                    </div>

                    {/* Legal Section */}
                    <div className="flex flex-col gap-4 text-center lg:text-left">
                        <h4 className="text-xl font-bold">Legal</h4>
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
