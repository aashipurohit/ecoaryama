import React, { useContext, useState,  useMemo } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
    const { search, products } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relavent');

    const toggleCategory = (e) => {
        const value = e.target.value;
        setCategory(prev => 
            prev.includes(value) 
                ? prev.filter(item => item !== value) 
                : [...prev, value]
        );
    };

    const toggleSubCategory = (e) => {
        const value = e.target.value;
        setSubCategory(prev => 
            prev.includes(value) 
                ? prev.filter(item => item !== value) 
                : [...prev, value]
        );
    };

    const filterProducts = useMemo(() => {
        let result = [...products];

        // Category filter
        if (category.length > 0) {
            result = result.filter(item => category.includes(item.category));
        }

        // Subcategory filter
        if (subCategory.length > 0) {
            result = result.filter(item => subCategory.includes(item.subCategory));
        }

        // Search filter
        if (search.trim()) {
            const searchTerm = search.toLowerCase();
            result = result.filter(item => 
                item.name.toLowerCase().includes(searchTerm)
            );
        }

        // Sorting
        if (sortType === 'low-high') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortType === 'high-low') {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [products, category, subCategory, search, sortType]);

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* Filter Options */}
            <div className='min-w-60'>
                <p 
                    onClick={() => setShowFilter(!showFilter)}  
                    className='my-2 text-xl flex items-center cursor-pointer gap-2'
                >
                    FILTERS
                    <img 
                        className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} 
                        src={assets.dropdown_icon} 
                        alt="" 
                    />
                </p>

                {/* Category Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        {['Hair', 'Face', 'Body'].map((cat) => (
                            <p key={cat} className='flex gap-2'>
                                <input 
                                    className='w-3' 
                                    type="checkbox" 
                                    value={cat} 
                                    checked={category.includes(cat)}
                                    onChange={toggleCategory} 
                                />
                                {cat}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Sub Category Filter */}
                <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>TYPE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        {['Cream', 'Oil', 'Lotion', 'Gel', 'Powder', 'Bars', 'Liquid'].map((type) => (
                            <p key={type} className='flex gap-2'>
                                <input 
                                    className='w-3' 
                                    type="checkbox" 
                                    value={type} 
                                    checked={subCategory.includes(type)}
                                    onChange={toggleSubCategory} 
                                />
                                {type}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'ALL'} text2={'COLLECTIONS'} />
                    <select 
                        value={sortType}
                        onChange={(e) => setSortType(e.target.value)} 
                        className='border-2 border-gray-300 text-sm px-2'
                    >
                        <option value="relavent">Sort by: Relevance</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>

                {/* Product Grid */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {filterProducts.map((item) => (
                        <ProductItem 
                            key={item.id} 
                            name={item.name} 
                            id={item.id} 
                            price={item.price} 
                            image={item.image} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;