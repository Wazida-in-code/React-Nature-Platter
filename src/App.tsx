import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import PopularProducts from './components/PopularProducts';
import type { IpopularProduct } from './Types';
import { useState } from 'react';

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
        <Services />
        <PopularProducts cart={cart} setCart={setCart} itemPromise = {itemPromise} />
    </>
    );
};

export default App;