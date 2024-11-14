import { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';


const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [selectedCat, setSelectedCat] = useState('All Products');
    
    const categories = ['All Products', ...new Set(gadgets.map(gadget => gadget.category))];

    const filterProduct = selectedCat === 'All Products' ? gadgets : gadgets.filter(gadget => gadget.category === selectedCat);

    useEffect(() => {
        fetch('gadgetData.json')
            .then(response => response.json())
            .then(data => setGadgets(data))

    }, []);
    return (
        <div>
            <h2 className="text-center text-3xl font-bold mb-12">Explore Cutting-Edge Gadgets</h2>
            <div className='flex justify-between'>
                <div className='flex flex-col space-y-3'>

                    {
                        categories.map(category => (
                            <button key={category} onClick={() => setSelectedCat(category)}  className={`${selectedCat === category ? 'btn w-full bg-purple-600 text-white' : 'btn'}`}>{category}</button>
                        ))
                    }
                </div>
                <div className='w-3/4 grid grid-cols-3 gap-4'>
                    {
                        filterProduct.map(gadget => (<Gadget key={gadget.product_id} gadget={gadget} />))
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;