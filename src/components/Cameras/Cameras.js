import React, { useEffect, useState } from 'react';
import Camera from '../Camera/Camera';
import './Cameras.css'

const Cameras = ({ addToCart }) => {
    const [cameras, setCameras] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCameras(data));
    }, [])
    return (
        <div className='cameras'>
            {
                cameras.map(camera =>
                    <Camera
                        camera={camera}
                        key={camera.id}
                        addToCart={addToCart}
                    ></Camera>)
            }
        </div>
    );
};

export default Cameras;