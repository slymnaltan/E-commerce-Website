import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slice/productSlice';
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { addTobasket, calculateBasket } from '../redux/slice/basketSlice';

const ProductDetails = () => {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const dispatch = useDispatch();

    const { price, image, title, description } = selectedProduct;
    const [count ,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const addBasket=()=>{
        const payload={
            id,
            price,
            description,
            image,
            title,
            count
        }
        dispatch(addTobasket(payload));
        dispatch(calculateBasket());
    }

    useEffect(() => {
        getProductById();
    }, [id, products]); 

    const getProductById = () => {
        const product = products.find((product) => product.id === parseInt(id));
        if (product) {
            dispatch(setSelectedProduct(product)); 
        }
    };
    return (
        <div className='flex-row' style={{ marginTop: '50px' }}>
            <img src={image} style={{ width: '300px',borderRadius:'10px' }} alt="" />
            <div style={{ marginTop: '3rem', marginLeft: '2rem' }}>
                <h1>{title}</h1>
                <p>{description} </p>
                <h1>{price} ₺</h1>

                <div>
                    <FaCircleMinus onClick={decrement} style={{ fontSize: '23px' }} /> <span style={{ fontSize: '28px' }}>{count}</span> <FaCirclePlus onClick={increment} style={{ fontSize: '23px' }} />
                </div>
                <div>
                    <button onClick={addBasket} style={{marginTop:'25px',padding:'13px',background:'orange',borderRadius:'10px',border:'none'}}>Add Basket</button>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails