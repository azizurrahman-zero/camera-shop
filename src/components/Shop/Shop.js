import React, { useState } from 'react';
import Cameras from '../Cameras/Cameras';
import Cart from '../Cart/Cart';
import Modal from 'react-modal';
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#FFFFFF',
        boxShadow: '0px 10px 20px rgba(32, 37, 38, 0.1), 0px 20px 50px rgba(32, 37, 38, 0.1)',
        borderRadius: '6px',
        padding: '20px 35px',
        border: 'none'
    },
};

Modal.setAppElement('#root');

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    const cameraNames = [];

    cart.map(camera => {
        cameraNames.push(camera.name);
        return cameraNames;
    })

    const addToCart = cartedCamera => {
        const totalCart = [...cart, cartedCamera];
        if (totalCart.length <= 4) {
            setCart(totalCart);
        }
        else {
            setIsOpen(true);
        }
    }

    const clearCart = () => {
        setCart([]);
        setRandom([]);
    }

    const chooseOne = () => {
        const randomItem = cameraNames[Math.floor(Math.random() * cameraNames.length)];
        setRandom(randomItem);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h1 className='alert-icon'><FontAwesomeIcon icon={faXmarkCircle} /></h1>
                <button onClick={closeModal} className='close-button'><FontAwesomeIcon icon={faXmark} /></button>
                <h3 className='alert-text'>You can't add more than four item in cart.</h3>
            </Modal>
            <div className='shop'>
                <Cameras
                    addToCart={addToCart}
                ></Cameras>
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                    chooseOne={chooseOne}
                    random={random}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;