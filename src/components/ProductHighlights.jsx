import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiShoppingBag, FiTruck } from 'react-icons/fi';
import { FaLeaf } from 'react-icons/fa';
import { assets } from '../assets/assets';

const ProductHighlights = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  const categories = [
    {
      id: 1,
      title: 'Kalava Ayurvedic',
      icon: <FaLeaf className="w-6 h-6 text-green-600" />,
      image: assets.k_rosewater_f,
      shortDescription: 'Pure Ayurvedic skincare with ancient recipes',
      fullDescription: (
        <div className="space-y-4">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img 
              src={assets.k_rosewater_f} 
              alt="Kalava Ayurvedic products" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Kalava Ayurvedic Solutions</h3>
          <p className="text-gray-600">
            Rooted in 5000 years of Ayurvedic tradition, Kalava brings you authentic herbal formulations 
            that nourish both skin and hair. Our products are free from parabens, sulfates, and artificial 
            fragrances.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800">Skincare Range</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Day Cream with SPF 30 protection</li>
                <li>Night Repair Cream with Ashwagandha</li>
                <li>Rose Water Toner with Vitamin C</li>
                <li>Turmeric Face Mask for brightening</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800">Haircare Range</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>3-in-1 Hair Powder (Amla, Aretha, Shikakai)</li>
                <li>Bhringraj Hair Oil for growth</li>
                <li>Natural Henna with Indigo</li>
                <li>Ayurvedic Shampoo Bar</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800">Why Choose Kalava?</h4>
            <p className="text-green-700">
              Certified organic ingredients • Cruelty-free • Handcrafted in small batches • 
              Sustainable packaging • Dermatologist tested
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Voyager Luggage',
      icon: <FiTruck className="w-6 h-6 text-blue-600" />,
      image: assets.categories_2,
      shortDescription: 'Engineered for the modern traveler',
      fullDescription: (
        <div className="space-y-4">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img 
              src={assets.categories_2} 
              alt="Voyager luggage collection" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Voyager Travel Systems</h3>
          <p className="text-gray-600">
            Designed by frequent travelers for frequent travelers, Voyager luggage combines 
            aerospace-grade materials with intelligent organization systems. Our products come 
            with a 10-year global warranty.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800">Product Lines</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Carry-On Pro with built-in charger</li>
                <li>Expandable Check-In (up to 30L expansion)</li>
                <li>Aluminum Edition (aircraft-grade)</li>
                <li>Weekender Duffle with shoe compartment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800">Key Features</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>TSA-approved smart locks</li>
                <li>360° silent spinner wheels</li>
                <li>Water-resistant ballistic nylon</li>
                <li>RFID-blocking pockets</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800">Travel Ready Guarantee</h4>
            <p className="text-blue-700">
              Global warranty coverage • Free repairs for life • 45-day trial period • 
              Carbon-neutral shipping
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: 'EcoThreads',
      icon: <FiShoppingBag className="w-6 h-6 text-purple-600" />,
      image: assets.categories_3,
      shortDescription: 'Sustainable fashion for conscious living',
      fullDescription: (
        <div className="space-y-4">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img 
              src={assets.categories_3} 
              alt="EcoThreads clothing line" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Ethical Fashion Revolution</h3>
          <p className="text-gray-600">
            EcoThreads redefines sustainable fashion with GOTS-certified organic fabrics and 
            fair-trade manufacturing. Each garment tells a story of environmental stewardship 
            and social responsibility.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800">Collections</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Organic Cotton Essentials</li>
                <li>Recycled Ocean Plastic Activewear</li>
                <li>Hemp-Linen Workwear</li>
                <li>Bamboo Fiber Underwear</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800">Sustainability</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Zero-waste pattern cutting</li>
                <li>Plant-based dyes</li>
                <li>Biodegradable packaging</li>
                <li>Closed-loop water system</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-purple-50 rounded-lg">
            <h4 className="font-semibold text-purple-800">Our Impact</h4>
            <p className="text-purple-700">
              Saved 2M liters of water • Recycled 15K kg of plastic • 
              Supported 200+ artisan families • Carbon-negative operations
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Product Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <article
              key={category.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                expandedCategory === category.id ? 'md:col-span-3' : ''
              }`}
              aria-expanded={expandedCategory === category.id}
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={`${category.title} category visual`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                  <div className="flex items-center">
                    <div className="mr-3 p-2 bg-white/80 rounded-full">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{category.shortDescription}</p>
                
                <div
                  id={`category-${category.id}-content`}
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    expandedCategory === category.id ? 'max-h-[2000px]' : 'max-h-0'
                  }`}
                  aria-hidden={expandedCategory !== category.id}
                >
                  <div className="pt-4">{category.fullDescription}</div>
                </div>

                <button
                  onClick={() => toggleExpand(category.id)}
                  className="mt-4 flex items-center text-fuchsia-600 hover:text-fuchsia-700 font-medium focus:outline-none focus:ring-2 focus:ring-fuchsia-500 rounded-md px-3 py-1"
                  aria-controls={`category-${category.id}-content`}
                >
                  {expandedCategory === category.id ? (
                    <>
                      <span>Show Less</span>
                      <FiChevronUp className="ml-1 w-5 h-5" />
                    </>
                  ) : (
                    <>
                      <span>Read More</span>
                      <FiChevronDown className="ml-1 w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;