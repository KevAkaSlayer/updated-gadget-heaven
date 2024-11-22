import { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [selectedCat, setSelectedCat] = useState('All Products');

    const categories = ['All Products', ...new Set(gadgets.map(gadget => gadget.category))];

    const filterProduct =
        selectedCat === 'All Products'
            ? gadgets
            : gadgets.filter(gadget => gadget.category === selectedCat);

    useEffect(() => {
        fetch('gadgetData.json')
            .then(response => response.json())
            .then(data => setGadgets(data));
    }, []);

    return (
        <div className="px-4 lg:px-16">
            <h2 className="text-center text-3xl font-bold mb-8 lg:mb-12">
                Explore Cutting-Edge Gadgets
            </h2>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Category Buttons - Column Layout */}
                <div className="flex flex-col space-y-3">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCat(category)}
                            className={`${
                                selectedCat === category
                                    ? 'btn w-full bg-purple-600 text-white'
                                    : 'btn w-full'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Gadgets Grid */}
                <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {filterProduct.map(gadget => (
                        <Gadget key={gadget.product_id} gadget={gadget} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gadgets;
