import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const [product, setProduct] = useState({});
    // const product = fakeData.find(pd => pd.key === productKey);
    useEffect(() =>{
        fetch('http://localhost:4000/product/' + productKey)
        .then(res => res.json())
        .then (data => setProduct(data));
    }, [productKey])
    
    return (
        <div>
            <h1>Your Product Details.</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;