import React from 'react';
import './Carts.css';


const Carts = (props) => {
    const { name, age, gender, img, role, cost } = props.cart;

    return (
        <div className="cart">
            <div>
                <img className="singer-img" src={img} alt="" />
            </div>
            <div style={{ textAlign: 'start' }}>
                <p>Name: {name}</p>
                <p>Role: {role}</p>
                <p>Gender: {gender}</p>
                <p>Age: {age}</p>
                <p>Salary: {cost}</p>
                <p style={{ textAlign: 'center' }}><button className="cart-btn"> Add To Cart</button></p>

            </div>
            <div>
                <i style={{ marginRight: '20px', backgroundColor: 'gray', padding: '5px', borderRadius: '5px', width: '17px' }} class="fab fa-facebook-f"></i>
                <i style={{ marginLeft: '20px', backgroundColor: 'gray', padding: '5px', borderRadius: '5px' }} class="fab fa-twitter"></i>
            </div>
        </div>
    );
};

export default Carts;