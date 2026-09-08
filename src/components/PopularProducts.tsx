import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { IpopularProduct } from "../Types";

interface PopularProducts{
    itemPromise: Promise<IpopularProduct[]>;
    cart: IpopularProduct[]
    setCard: Dispatch<SetStateAction<IpopularProduct[]>>
}

const PopularProducts = ({itemPromise, cart, setCart}: PopularProducts) => {

    const data = use(itemPromise)

    const handleCart = (product: IpopularProduct) =>{
        setCart([...cart, product])
        console.log(cart);
    }


    return (
        <div className='my-[40px] w-11/12 mx-auto '>
            <h2 className='text-green-600 mb-4 font-bold text-3xl'>Popular Products</h2>




<div className='grid grid-cols-12'>

{/* left box- 30% */}
<div className='col-span-4 rounded-md shadow-2xl p-4 bg-blue-500 bg-gradient-to-r from-green-600 to-green-400'>
        <h2 className='font-bold text-2xl'>30% off</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, ad!</p>
        <button className="bg-blue-50 text-black px-4 py-2 rounded-md hover:bg-green-500-600 hover:scale-110 transition-transform duration-300 hover:text-blue-700">Buy Now</button>
</div>


{/* right box- 70% */}
<div className='col-span-8 '>
        <div className="grid grid-cols-3 gap-4">
            {
            data.map((product, index) => {
                return (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-md shadow-md">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md transition-transform duration-500"/>

                            <h3 className="font-bold text-lg">{product.name}</h3>
                            <p className="text-gray-600">${product.price.toFixed(2)}</p>
                            <p className="text-yellow-500">Rating: {product.rating}</p>

                            <button onClick={() => handleCart(product)} className="bg-mauve-400 text-cyan-950 font-bold p-3 my-2 rounded-md hover:bg-mauve-500 hover:text-black hover:scale-110 transition-transform duration-500">Add to cart</button>
                    </div>
                )
            })
        }
        </div>
</div>

</div>



        </div>
    );
};

export default PopularProducts;