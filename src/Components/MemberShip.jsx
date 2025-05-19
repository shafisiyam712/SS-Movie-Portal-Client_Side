import React from 'react';

const plans = [
  {
    name: "Basic",
    price: "$5/month",
    features: ["Access to basic content", "Ad-supported streaming", "Watch on 1 device", "Quality up to 720px"],
  },
  {
    name: "Standard",
    price: "$10/month",
    features: ["Access to all content", "No ads", "Watch on 2 devices", "HD available"],
  },
  {
    name: "Premium",
    price: "$15/month",
    features: ["All Standard features", "Ultra HD", "Watch on 4 devices", "Exclusive early access"],
  },
];

const MemberShip = () => {
  return (
    <div className="bg-white dark:bg-[#121212] mt-20 px-4">
      <h2 className="text-3xl font-extrabold text-center mb-10 text-black dark:text-white">
        Membership Plans
      </h2>
      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-center mb-4 text-black dark:text-white">
              {plan.name}
            </h3>
            <p className="text-center text-2xl font-semibold mb-6 text-[#1E2A47] dark:text-white">
              {plan.price}
            </p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700 dark:text-white flex items-center">
                  ✅ <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
             
              <button className="btn font-bold border border-[#1E2A47] dark:border-white rounded-full text-[#1E2A47] dark:text-[#1E2A47]  w-1/2 hover:text-white hover:bg-[#1E2A47] dark:hover:bg-[#1E2A47]  dark:hover:text-white transition duration-300">
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberShip;

