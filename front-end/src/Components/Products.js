import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'

const Products = ( { product }) => {
   
    return (
        
          <Card className="my-3 p-3  rounded">
             <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>
            <Card.Body>
            <Card.Title as='div'>
            <Link to={`/product/${product._id}`}>
              
                
                <Card.Text ><strong>{product.name}</strong></Card.Text> 
            </Link>
            </Card.Title>
            <Card.Text as='div'>
                <div className="my-3">
                  <Rating value={product.rating} text={`${product.numReviews} review`} color='yellow' />
                </div>


            </Card.Text>
            <Card.Text as='h3'>
                ${product.price}


            </Card.Text>
            </Card.Body>
            
          </Card>
       
    )
}

export default Products
