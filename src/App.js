import React from 'react'
/* import Navbar from './components/Navbar/index' */
import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from './globalStyles'
import Hero from './components/Hero/index'
import Products from './components/Products/index'
import { productData, productDataTwo } from './components/Products/data'
import Feature from './components/Features'
import Footer from './components/Footer/index'
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose Your Favorite" data = {productData}/>
      <Feature />
      <Products heading="Choose Your Favorite" data = {productDataTwo}/>
      <Footer />
    </Router>
  );
}

export default App;
