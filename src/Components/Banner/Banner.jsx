import bannerImg from "../../assets/banner.jpg";

const Banner = () => {
    return (
        <div className="relative flex flex-col justify-center items-center rounded-b-2xl bg-[#9538E2] mb-96 px-4 lg:px-16">
            {/* Text Content */}
            <div className="flex flex-col justify-center items-center gap-6 py-16 lg:py-24">
                <h1 className="text-3xl font-bold text-center text-white lg:text-5xl xl:text-6xl lg:w-3/4">
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h1>
                <p className="text-white text-center lg:text-lg lg:w-2/3">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <button className="bg-white rounded-3xl px-6 py-3 text-[#9538E2] hover:bg-[#f1f1f1] transition duration-300">
                    Shop Now
                </button>
            </div>

            {/* Banner Image */}
            <div className="absolute -bottom-52 md:-bottom-80 w-11/12 lg:w-[900px] h-64 lg:h-[400px] rounded-xl overflow-hidden">
                <img
                    src={bannerImg}
                    alt="banner"
                    className="w-full h-full object-cover bg-no-repeat"
                />
            </div>
        </div>
    );
};

export default Banner;
