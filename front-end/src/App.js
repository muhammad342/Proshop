import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import  './index.css'
import {Container} from 'react-bootstrap'
import { BrowserRouter as  Router , Route} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen'

const App = () => {
  return (
    <Router>
      <Header/>
    <main>
      <Container className="py-3">
    <Route path='/' component={ HomeScreen} exact/>
    <Route path='/product/:id' component={ ProductScreen} />
    <Route path='/cart/:id?' component={ CartScreen} />
    </Container>
    </main>
      <Footer/>
      </Router>
  );
}

export default App;
