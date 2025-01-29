import React from 'react'
import ProductList from '../components/ProductList'
import logo from '../images/bargain-bazaar.jpeg'
const Home = () => {
  return (
    <div>
      <div className='flex-row' style={{background:'lightblue',padding:'28px',textAlign:'center',borderRadius:'10px'}} >
        <p style={{margin:'0 20px',fontSize:'20px',color:'black'}}>Welcome to Bargain Bazaar! Discover unbeatable deals on everything you need, all in one place. Shop smart, save big, and enjoy a seamless shopping experience with products you love at prices you won’t believe. Dive into the world of endless bargains—because at Bargain Bazaar, great value is always in style!"</p>
        <img style={{width:'350px',borderRadius:'10px'}} src={logo} alt="" />
      </div>
      <ProductList />
    </div>
  )
}

export default Home