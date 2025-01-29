import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slice/productSlice';
import Product from './Product';
const ProductList = () => {
    const dispatch = useDispatch();
    const { products, searchTerm } = useSelector((store) => store.product);

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) // Filtreleme işlemi
    );

    return (
        <div className='flex-row' style={{ flexWrap: 'wrap', marginTop: '25px' }}>
            {
                filteredProducts && filteredProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default ProductList