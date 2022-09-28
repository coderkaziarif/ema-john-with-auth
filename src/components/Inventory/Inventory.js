import React from 'react';
import { Button } from 'react-bootstrap';
import fakeData from '../../fakeData';

const Inventory = () => {
    const handleAddProduct = () => {
        fetch('http://localhost:4000/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }
    return (
        <div>
            <Button variant = 'primary' onClick={handleAddProduct} > Add Product.</Button>
        </div>
    );
};

export default Inventory;