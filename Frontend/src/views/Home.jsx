import React from 'react'
import Products from './Products'
import Carrousel from '../components/Carrousel'

const Home = ({ products }) => {
  console.log(products)
  return (
    <div className='d-flex flex-column overflow-y-hidden '>
      <Carrousel />
      <Products products={products} />
    </div>
  )
}

export default Home