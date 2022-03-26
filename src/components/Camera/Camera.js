import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Camera.css'

const Camera = ({ camera, addToCart }) => {
    const { name, price, picture } = camera;
    return (
        <div className='camera'>
            <img src={picture} alt={name} />
            <h3 className='camera-name'>{name}</h3>
            <div className='camera-footer'>
                <p>৳ {price}</p>
                <button onClick={() => addToCart(camera)}><FontAwesomeIcon icon={faShoppingCart} className={'button-icon'} />Add to Cart</button>
            </div>
        </div>
    );
};

export default Camera;