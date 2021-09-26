import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import './Main.css'

const Main = () => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    return (
        <div className="main">
            <div className="carts">
                {
                    carts.map(cart => <Carts cart={cart} />)
                }
            </div>

            <div>
                <h2>Select Singer: { }</h2>
                <h3>Total Cost: ${ }</h3>
            </div>
        </div>
    );
};

export default Main;