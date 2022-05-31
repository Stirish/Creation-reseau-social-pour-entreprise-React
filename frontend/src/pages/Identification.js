import React from "react";
import Log from '../components/log'

const Identification = () => {
    return(
        <div className='profil-page'>
            <div className='log-container'>
                <Log signin={false} signup={true} />
                <div className='img-container'>
                    <img src='./img/logos/icon-left-font.svg' alt='logo groupomania' />
                </div>
            </div>
        </div>
    );
};

export default Identification;