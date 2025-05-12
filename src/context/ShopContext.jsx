import React, { createContext, useState, useEffect } from "react"; // Added React import
import PropTypes from 'prop-types'; // Add this line
import { products as initialProducts } from "../assets/assets"; // Fixed path

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [latestProducts, setLatestProducts] = useState([]); // Fixed casing

    const currency = "₹"; // Fixed currency symbol
    const delivery_fee = 10;
    const [search ,setSearch ] = useState('');
    const[showSearch,setShowSearch] = useState(false)

    useEffect(() => {
        setProducts(initialProducts);
        setLatestProducts(initialProducts.slice(0, 10));
    }, []);

    const value = { // Fixed object syntax
        products,
        latestProducts,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Added prop validation
};

export default ShopContextProvider;