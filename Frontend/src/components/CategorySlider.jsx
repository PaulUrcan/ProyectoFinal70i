import React, { useState } from 'react';

const CategorySlider = ({ categories, selectedCategory, setSelectedCategory }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        toggleMenu();
    };

    const showAllProducts = () => {
        setSelectedCategory(null);
        toggleMenu();
    };

    return (
        <div className='bg'>
            <div className={`burger-menu bg w-25 mx-5 my-3 position-relative ${menuOpen ? 'open' : ''}`}>
                <button className=' px-md-5  cat rounded-2 footer text-white border-white border-1 cat-btn' onClick={toggleMenu}>
                    Categorías
                </button>
                <div className={`d-flex flex-column w-25 cat position-absolute ${menuOpen ? 'show' : 'hide'}`}>
                    <button
                        key="all"
                        className={selectedCategory === null ? 'active rounded-2 text-black border-white border-1' : 'rounded-2 footer text-white border-white border-1 cat-btn'}
                        onClick={() => showAllProducts()}
                    >
                        Todos
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            className={selectedCategory === category ? 'active rounded-2 text-black border-white border-1' : 'rounded-2 footer text-white border-white border-1 cat-btn'}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategorySlider;
