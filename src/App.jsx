import React, { useEffect } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasket, setDrawer,removeFromBasket } from './redux/slice/basketSlice'
import Footer from './components/Footer'
const App = () => {

  const { products, drawer,totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateBasket())
  },[])

  const handleDelete = (id) => {
    dispatch(removeFromBasket(id));
    dispatch(calculateBasket()); // Sepet toplamını güncellemek için
  };
  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer onClose={() => dispatch(setDrawer())} anchor='right' open={drawer} >
          <h1 style={{padding:'5px'}}>Shopping List</h1>
          {
            products && products.map((product) => {
              return (
                <div key={product.id}>
                  <div className='flex-row' style={{ padding: '1.5rem' }}>
                    <img style={{ marginRight: '2rem' }} src={product.image} width={50} height={50} alt="" />
                    <p style={{ width: '25rem' }}>{product.title} <span style={{color:'red'}}>({product.count})</span> </p>
                    <p style={{ marginRight: '1rem', width: '60px' }}>{product.price} ₺</p>
                    <button onClick={() => handleDelete(product.id)} 
                     style={{ borderRadius: '8px',padding:'10px', border: 'none', background: 'red', color: '#fff' }}>Delete</button>
                  </div>
                </div>
              )
            })
          }
          <h2 style={{padding:'20px'}}>Total Price:{totalAmount} ₺ </h2>
        </Drawer>
      </PageContainer>
      <Footer/>
    </div>
  )
}

export default App
