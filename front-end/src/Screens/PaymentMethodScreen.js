import React,{useState} from 'react'
import {useDispatch,useSelector } from 'react-redux'
import FormContainer from '../Components/FormContainer' 
import { Form,Button,Col} from 'react-bootstrap'
import { savePaymentMethod } from '../actions/cartActions'
import CheckoutSteps from '../Components/CheckoutSteps'
const PaymentMethodScreen = ({history}) => {
    const cart =useSelector((state)=>state.cart)
    const {shippingAddress}=cart

    if(!shippingAddress){
        history.push('/shipping')
    }
    const [paymentMethod,setPaymentMethod]=useState('paypal')
    const dispatch =useDispatch()
    const submitHandler =(e) =>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }
    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3/>
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
           <Form.Group>
               <Form.Label as='legend'>select method</Form.Label>
               <Col>
               <Form.Check type='radio' id='paypal' name='paymentMethod' value='paypal' checked onChange={(e)=>setPaymentMethod(e.target.value)}></Form.Check>
               </Col>

           </Form.Group>
                <Button type='Submit' variant='primary'>Continue</Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentMethodScreen
