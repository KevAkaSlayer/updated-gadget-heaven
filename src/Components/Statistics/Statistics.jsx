import { Helmet } from "react-helmet-async";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const data = useLoaderData(); 

  const chartData = data.map(item => ({
    name: item.product_title, 
    price: item.price        
  }));

  return (
    <div>
      <Helmet>
        <title>Gadget Heaven | Statistics</title>
      </Helmet>
      
      {/* Header Section */}
      <div className="bg-[#9538E2] my-5">
        <div className="w-11/12 mx-auto p-5">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-center text-3xl md:text-4xl font-bold text-white">Statistics</h1>
            <p className="text-center text-sm md:text-base text-white max-w-xl">
              Explore the latest gadgets that will take your experience to the next level. 
              From smart devices to the coolest accessories, we have it all!
            </p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="w-11/12 mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-5 text-center">Price Statistics</h2>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" stroke="#333" tick={{ fontSize: 12 }} />
              <YAxis stroke="#333" tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="price" fill="#9538E2" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
