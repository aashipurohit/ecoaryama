import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
            <div className="overflow-hidden rounded-lg shadow-md h-[350px] w-[220px]"> {/* Added aspect-square */}
                <img 
                    className="hover:scale-110 transition-transform ease-in-out duration-300 w-full h-full object-cover" 
                    src={image} 
                    alt={name} 
                />
            </div>
            <p className="pt-3 pb-1 text-sm font-semibold">{name}</p>
            <p className="text-sm font-medium">{currency}{price}</p>
        </Link>
    );
};

ProductItem.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default ProductItem;