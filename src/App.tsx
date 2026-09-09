import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import PopularProducts from './components/PopularProducts';
import type { IpopularProduct } from './Types';
import { Suspense, useState } from 'react';
import Cart from './components/Cart';

const popularProduct = async (): Promise<IpopularProduct[]> => {
  const res = await fetch("/public/PopularProduct.json");
  const data = await res.json();
  return data;
}

const itemPromise = popularProduct();


const App = () => {
    const [cart, setCart] = useState<IpopularProduct[]>([]);
    
    return (
    <>
        <Navbar cart={cart} setCart={setCart} />
        <Banner />

        <Cart cart={cart}></Cart>

        <Suspense fallback={<h2>Page is coking.........</h2>}>
            <PopularProducts cart={cart} setCart={setCart} itemPromise = {itemPromise} />
        </Suspense>


        <Services />
    </>
    );
};

export default App;