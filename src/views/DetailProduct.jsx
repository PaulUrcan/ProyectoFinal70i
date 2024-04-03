import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../utils';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const DetailProduct = () => {
    const [prod,setProd]=useState({});
    const {id}=useParams();
    const getProduct=(id)=>{
        getOneProduct(id).then((result)=>{
           
            if (result) {
                setProd(result)
            }else{
                console.log("no hay info");
            }
        })
    }
    
    
    useEffect(()=>{
        getProduct(id);
    },[])
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.src} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text><strong>{prod.category}</strong></Card.Text>
        <Card.Text>
          {prod.description}
        </Card.Text>
        <Card.Text>
            Precio: ${prod.price}
        </Card.Text>
  
      </Card.Body>
    </Card>
  )
}

export default DetailProduct