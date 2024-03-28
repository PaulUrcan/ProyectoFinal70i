import React from 'react'
import Products from './Products'
import Carrousel from '../components/Carrousel'
import CategorySlider from '../components/CategorySlider'
import { useState } from 'react'

const Home = ({ products, setProducts }) => {
  const categories = [...new Set(products.map(product => product.category))];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory) : products;

  const [bought, setBought] = useState(false)
  const handleBuy = (product) =>{
    if (!bought) {
      setBought(true);
      setProducts(products.map(p => p.id === product.id ? { ...p, bought: true } : p)); 
    }else{
      setBought(false);
      setProducts(products.map(p => p.id === product.id ? { ...p, bought: false } : p)); 
    }

  }

  const [fav, setFav] = useState(false);
  const handleFav = (product) =>{
    if (!fav) {
      setFav(true);
      setProducts(products.map(p => p.id === product.id ? { ...p, fav: true } : p));
    }else{
      setFav(false);
      setProducts(products.map(p => p.id === product.id ? { ...p, fav: false } : p));
    }
    
    
  }
  return (
    <div className='d-flex flex-column overflow-y-hidden '>
      <Carrousel />
      <CategorySlider
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory} 
      />
      <div className='d-flex flex-row'>
        <Products products={filteredProducts} handleBuy={handleBuy} handleFav={handleFav}  />
      </div>
      
    </div>
  )
}

export default Home