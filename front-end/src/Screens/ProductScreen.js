import React from 'react'
import {Link} from 'react-router-dom'
import {Row,Col,Card,ListGroup ,Image,Button} from 'react-bootstrap'
import products from '../products'
import Rating from '../Components/Rating'
 
const ProductScreen = ({match}) => {
   
        const product=products.find(p=>p._id===match.params.id);
        return (
        <>
         <Link className='btn btn-light my-3' to='/'>go back</Link>
         <Row>
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
                         <ListGroup.Item>
                             <Button className='btn-block btn1' type="button"  disabled={product.countInStock===0 }>
                                 ADD TO CART

                             </Button>
                         </ListGroup.Item>

                     </ListGroup>
                 </Card>
             
             </Col>
             </Row>  
        </>
    )
}

export default ProductScreen
