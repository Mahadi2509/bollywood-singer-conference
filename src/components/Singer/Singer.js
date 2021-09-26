import React from 'react';
import './Singer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Singer = (props) => {
    const element = <FontAwesomeIcon icon={faUser} />;
    const { countSingers, singers } = props;

    let totalCost = 0;

    for (const countSinger of countSingers) {
        const { cost } = countSinger;
        totalCost = totalCost + cost;
    }

    const show = document.getElementById('side-show');
    for (const singer of singers) {
        show.textContent = '';
        const { name, img } = singer;
        const div = document.createElement('div');
        div.classList.add('singer-list');
        div.innerHTML = `
        <img src=${img} alt=""/>
        <h4>${name}</h4>
        `;
        show.appendChild(div);

    }

    return (
        <div className="singer">
            <h2><span>{element}</span>  Add Singers: {props.countSingers.length} </h2>
            <h3>Total Cost: {totalCost} <i class="fas fa-rupee-sign"></i></h3>
            <button className="singer-btn">Invite</button>

            <div id="side-show">

            </div>
        </div>
    );
};

export default Singer;