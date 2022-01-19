import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import  './index.css'
import {Container} from 'react-bootstrap'
import { BrowserRouter as  Router , Route} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ProfileScreen from './Screens/profileScreen'
import ShippingScreen from './Screens/ShippingScreen'

const App = () => {
  return (
    <Router>
      <Header/>
    <main>
      <Container className="py-3">
      <Route path='/login' component={ LoginScreen} />
      <Route path='/register' component={ RegisterScreen} />
      <Route path='/profile' component={ ProfileScreen} />
      <Route path='/shipping' component={ ShippingScreen} />
    <Route path='/product/:id' component={ ProductScreen} />
    <Route path='/cart/:id?' component={ CartScreen} />
    <Route path='/' component={ HomeScreen} exact/>
    </Container>
    </main>
      <Footer/>
      </Router>
  );
}

export default App;
