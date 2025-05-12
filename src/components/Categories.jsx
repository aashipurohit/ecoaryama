import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Skincare",
      description: "Discover our natural and Ayurvedic skincare solutions for radiant skin",
      image: assets.categories_1,
      link: "/skincare",
      alt: "Natural skincare products with herbs and bottles"
    },
    {
      id: 2,
      title: "Luggage Bags",
      description: "Premium quality travel bags for your adventures",
      image: assets.categories_2,
      link: "/luggage",
      alt: "Stylish luggage bags on a suitcase stand"
    },
    {
      id: 3,
      title: "Clothing",
      description: "Eco-friendly and comfortable fashion for everyday wear",
      image: assets.categories_3,
      link: "/clothing",
      alt: "Sustainable clothing items on hangers"
    }
  ];

  return (
    <section aria-labelledby="categories-heading" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 id="categories-heading" className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Categories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <article 
              key={category.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={category.image}
                  alt={category.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={600}
                  height={400}
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="mb-4 opacity-90">{category.description}</p>
                <Link
                  to={category.link}
                  className="inline-block px-6 py-2 bg-fuchsia-200 text-gray-900 font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
                  aria-label={`Explore ${category.title} collection`}
                >
                  Shop Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;