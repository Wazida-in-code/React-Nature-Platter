// import React from 'react';
import type { IpopularProduct } from '../Types';

interface IcartProps {
    cart : IpopularProduct[]
}

const Cart = ({cart}: IcartProps) => {

    if (cart.length === 0){
        return (
           <div className='w-11/12 mx-auto'>
            <h2 className='text-green-600 mb-4 font-bold text-3xl'>Cart</h2>
            <h4 className="font-bold text-lg">Cart is empty! Please, add any product in cart</h4>
           </div>
        )
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-green-600 mb-4 font-bold text-3xl'>Cart</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                cart.map((product) => {
                return (
                <div
                    key={product.name}
                    className="bg-white p-4 rounded-md shadow-md">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md transition-transform duration-500"/>

                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    <p className="text-yellow-500">Rating: {product.rating}</p>
                </div>  
                )
                })
                }
            </div>
        </div>
    );
    }

export default Cart;