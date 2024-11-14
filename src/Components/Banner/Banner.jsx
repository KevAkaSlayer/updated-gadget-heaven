import bannerImg from "../../assets/banner.jpg";

const Banner = () => {

    return (
        <div className="flex flex-col justify-center items-center rounded-b-2xl bg-[#9538E2] mb-96">
            <div className="flex flex-col justify-center items-center gap-8 py-20">
                <h1 className="text-3xl font-bold w-2/3 text-center text-white lg:text-6xl">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="text-white w-1/2 text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className="bg-white rounded-3xl px-4 py-2 text-[#9538E2]">Shop Now</button>
            </div>
            <div className="absolute left-90 bottom-20 w-[900px] h-[400px] rounded-xl">
                <img src={bannerImg} alt="banner" className="rounded-xl w-full h-full object-cover bg-no-repeat" />
            </div>
        </div>
    );
};

export default Banner;