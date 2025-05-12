import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10)); // Load 10 products (5 visible + 5 scrollable)
  }, [products]);

  return (
    <div className="my-10 bg-fuchsia-100">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our latest range of natural cosmetics, designed to nourish your skin and hair. Pure, effective, and crafted with care.
        </p>
      </div>

      {/* Horizontal Scrollable Container */}
      <div className="relative px-4"> {/* Added padding to prevent edge-clipping */}
        <div className="flex overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory">
          <div className="flex gap-4"> {/* Added gap-4 for spacing between items */}
            {latestProducts.map((item, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[calc(10%-16px)] snap-center" // Adjust width for 5 items + gap
              >
                <ProductItem
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;