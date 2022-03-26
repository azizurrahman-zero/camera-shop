import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Camera Shop <FontAwesomeIcon icon={faCamera} /></h1>
        </div>
    );
};

export default Header;