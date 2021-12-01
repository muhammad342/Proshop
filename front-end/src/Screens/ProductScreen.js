import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Row,Col,Card,ListGroup ,Image,Button,Form} from 'react-bootstrap'
 import { useDispatch,useSelector } from 'react-redux'
import Rating from '../Components/Rating'
 import { listProductsDetails } from '../actions/productActions'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
const ProductScreen = ({history,match}) => {
    const[qty,setQty]=useState(1)
   const dispatch=useDispatch()
   const productDetails=useSelector((state)=>state.productDetails)
   const {loading,error,product}=productDetails
     useEffect(()=>{
        dispatch(listProductsDetails(match.params.id))
     },[dispatch,match])
     const addToCartHandler=()=>{
         history.push(`/cart/${match.params.id}?qty=${qty}`)

     }
     
        return (
        <>
       
         <Link className='btn btn-light my-3' to='/'>go back</Link>
         {loading ? <Loader/> : error ? <Message>{error}</Message> :( <Row>
             <Col md={6}>
                 <Image src={product.image} alt={product.name } fluid />
             </Col>
             <Col md={3}>
                 <ListGroup variant='flush'>
                     <ListGroup.Item>
                         <h3>{product.name}</h3>
                     </ListGroup.Item>
                     <ListGroup.Item>
                         <Rating  value={product.rating} text={`${product.numReviews} Reviews`} color='yellow'/>
                     </ListGroup.Item>
                     <ListGroup.Item>
                        price:${product.price}
                     </ListGroup.Item>
                     <ListGroup.Item>
                      description:{product.description}
                     </ListGroup.Item>
                 </ListGroup>
             </Col>
             <Col md={3}>
             
                 <Card>
                     <ListGroup variant='flush'>
                         <ListGroup.Item>
                             <Row>
                                 <Col>
                                 price:
                                 </Col>
                                 <Col>
                                <strong>${product.price}</strong> 
                                 </Col>

                             </Row>
                         </ListGroup.Item>
                         <ListGroup.Item>
                             <Row>
                                 <Col>
                                 status:
                                 </Col>
                                 <Col>
                                 {product.countInStock > 0 ? 'In stock' : 'out of stock'}
                                 </Col>
                             </Row>
                         </ListGroup.Item>
                         {(product.countInStock) && (
                         <ListGroup.Item>
                             <Row>
                                 <Col>
                                 Qty
                                 </Col>
                                 <Col>
                                 <Form.Control as='select' value={qty} onChange={(e)=>setQty(e.target.value)}>
                                     {

                                  [...Array(product.countInStock).keys()].map((x)=>(
                                      <option key={x+1} value={x+1}>{x+1}</option>
                                  ))
                                     }</Form.Control>
                                 </Col>
                             </Row>
                         </ListGroup.Item>
                         )}
                         <ListGroup.Item>
                             <Button className='btn-block btn1' type="button"  disabled={product.countInStock===0 }  onClick={addToCartHandler} >
                                 ADD TO CART

                             </Button>
                         </ListGroup.Item>

                     </ListGroup>
                 </Card>
             
             </Col>
             </Row>  ) }
        
        </>
    )
}

export default ProductScreen
