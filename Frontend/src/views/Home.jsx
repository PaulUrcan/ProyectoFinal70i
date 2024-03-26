import React from 'react'

const Home = ({products}) => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col main">
                <h1>Home</h1>
                {products.map((product,index)=>{
    return(<li key={index}>{product.name}</li>)
    })}
            </div>
        </div>
    </div>
  )
}

export default Home