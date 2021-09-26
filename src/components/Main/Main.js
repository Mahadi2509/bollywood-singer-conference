import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Singer from '../Singer/Singer';
import './Main.css'

const Main = () => {
    const [carts, setCarts] = useState([]);
    const [countSingers, setCountSingers] = useState([]);
    const [singers, setSingers] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])
    const handleAddToCart = (singer) => {
        const newCountSingers = [...countSingers, singer];
        setCountSingers(newCountSingers);
        const newSingers = [singer];
        setSingers(newSingers);
    }
    return (
        <div className="main">
            <div className="carts">
                {
                    carts.map(cart => <Carts key={cart.id} cart={cart} handleAddToCart={handleAddToCart} />)
                }
            </div>

            <div>
                <Singer countSingers={countSingers} singers={singers} />
            </div>
        </div>
    );
};

export default Main;