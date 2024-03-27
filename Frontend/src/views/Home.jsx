import React from 'react'
import Products from './Products'

const Home = ({products}) => {
  return (
    <>
      <Products products={products}/>
    </>
  )
}

export default Home