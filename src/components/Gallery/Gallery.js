import React, { useState } from 'react';
import { data } from './fakeData';
import { AiOutlineCloseCircle } from "react-icons/ai";

import './Gallery.scss';

const Gallery = () => {
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <div className='Gallery_Container'>
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} alt="" />
                <AiOutlineCloseCircle onClick={() => setModel(false)} />
            </div>

            <div className="gallery">
                {
                    data.map((item, index) => {
                        return (
                            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                                <img className="images" src={item.imgSrc} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Gallery;