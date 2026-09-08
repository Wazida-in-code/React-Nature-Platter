import React from 'react';
import type { IpopularProduct } from '../Types';
import { Bounce, toast } from 'react-toastify';


interface IpopularProductProps {
    product: IpopularProduct
    cart: IpopularProduct[]
    setCart: React.Dispatch<React.SetStateAction<IpopularProduct[]>>
}


const PopularProductCard = ({product, cart, setCart} : IpopularProductProps) => {

     const handleCart = (product: IpopularProduct) =>{
        setCart([...cart, product])
    
        toast(`${product.name} added to cart successfully!`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });
}


    return (
        <div
            key={product.name}
            className="bg-white p-4 rounded-md shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md transition-transform duration-500"/>

            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <p className="text-yellow-500">Rating: {product.rating}</p>
            
            <button onClick={() => handleCart(product)} className="bg-mauve-400 text-cyan-950 font-bold p-3 my-2 rounded-md hover:bg-mauve-500 hover:text-black hover:scale-110 transition-transform duration-500">Add to cart</button>
        </div>
    );
};

export default PopularProductCard;